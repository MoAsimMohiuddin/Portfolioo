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
        const response = await fetch("https://ip-api.com/json/");
        const data = await response.json();

        if (data.status === "success") {
          setLocation(data);

          // Check if the IP already exists in Supabase
          const { data: existingRecords, error: fetchError } = await supabase
            .from("visitor_locations")
            .select("id")
            .eq("ip", data.query);

          if (fetchError) {
            console.error("Error checking existing data:", fetchError.message);
            return;
          }

          // If IP does not exist, insert new row
          if (existingRecords.length === 0) {
            const { error } = await supabase.from("visitor_locations").insert([
              {
                ip: data.query,
                country: data.country,
                country_code: data.countryCode,
                region: data.region,
                region_name: data.regionName,
                city: data.city,
                zip: data.zip,
                latitude: data.lat,
                longitude: data.lon,
                timezone: data.timezone,
                isp: data.isp,
                org: data.org,
                as_info: data.as,
              },
            ]);

            if (error) console.error("Error inserting data:", error.message);
            else console.log("Location stored successfully!");
          } else {
            console.log("IP already exists, skipping insert.");
          }
        }
      } catch (err) {
        console.error("Error fetching location:", err);
      }
    };

    fetchLocation();
  }, []);


  console.log('User From:', location);

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
