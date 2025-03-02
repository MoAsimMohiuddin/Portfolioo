import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Analytics } from '@vercel/analytics/react';
import { supabase } from './supabaseClient';

import ReactGA from 'react-ga';
import { useState, useEffect } from 'react';
const TRACKING_ID = "G-4XNKHSTTSQ";
ReactGA.initialize(TRACKING_ID);

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipinfo.io/json?token=4e51854f68623b");
        const data = await response.json();

        if (data.ip) {  // ✅ Check if we got a valid response
          setLocation(data);

          // ✅ Check if the IP already exists in Supabase
          const { data: existingRecords, error: fetchError } = await supabase
            .from("visitor_locations")
            .select("id")
            .eq("ip", data.ip);

          if (fetchError) {
            console.error("Error checking existing data:", fetchError.message);
            return;
          }

          // ✅ If IP does not exist, insert new row
          if (!existingRecords || existingRecords.length === 0) {
            const { error } = await supabase.from("visitor_locations").insert([
              {
                ip: data.ip, // ✅ Corrected IP field
                country: data.country,
                country_code: data.country,  // ✅ Correct field from ipinfo.io
                region: data.region,
                region_name: data.region, // `data.regionName` may not exist in ipinfo.io
                city: data.city,
                zip: data.postal, // ipinfo.io uses `postal` instead of `zip`
                latitude: data.loc.split(",")[0], // Extract latitude from `loc`
                longitude: data.loc.split(",")[1], // Extract longitude from `loc`
                timezone: data.timezone,
                isp: data.org, // ipinfo.io does not provide `isp`, use `org`
                org: data.org,
                as_info: "N/A", // ipinfo.io does not provide `as` info
              },
            ]);

          } else {
          }
        }
      } catch (err) {
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
