// import Welcome from "./components/Welcome";
import Welcome from './components/Welcome';
import NavBar from './components/NavBar';
import CompanyCard from './components/CompanyCard';
import JobCard from './components/JobCard';
import Footer from './components/Footer';
import { useEffect, useState } from "react";
import { getCompanies } from "./Services/CompanyService";
import type { Company } from "./types/company";


function App(){
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    let isMounted = true;

    const fetchCompanies = async () => {
      setLoading(true);
      try {
        const data = await getCompanies();
        if (isMounted) {
          setCompanies(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as Error);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchCompanies();

    return () => {
      isMounted = false;
    };
  }, []);
  
  if(loading){
    return <div>Loading...</div>
  }

  if(error){
    return <div>Error: {error.message}</div>
  }
  
  return(
    <>
    <NavBar />
    {/* <Welcome /> */}
    <br />
    <CompanyCard  
    companies={companies}/>
    <JobCard />
    <Footer />
    </>
  )
}
export default App