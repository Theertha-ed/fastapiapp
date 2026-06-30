import Welcome from './components/Welcome';
import NavBar from './components/Navbar';
import CompanyCard from './components/CompanyCard';
import JobCard from './components/JobCard';
import Footer from './components/Footer';
import type { Company } from './types/company';
import {getCompanies} from './Services/CompanyService';
import { useEffect, useState } from 'react';

function App() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [error,seterror] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(True);

  async function fetchCompanies() {
    setLoading(true);
    try {
      const companies = await getCompanies();
      setCompanies(companies);
    } catch (error) {
      setError('error');
    } finally {
      setLoading(false);
    }

  useEffect(() => {
    fetchCompanies();

  }, []);
  if (loading){
    return <div>Loading..</div>;
  }
  if (error){
    return <div>Error:{error.message</div>;
  }

  return (
      <>
          <NavBar />
          <Welcome />
          <CompanyCard companies={companies} />
          <JobCard />
          <Footer />
      </>
  )
}

export default App