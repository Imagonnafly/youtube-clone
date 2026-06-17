import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, Menu } from 'lucide-react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      <div className="flex items-center gap-4">
        <Menu className="cursor-pointer" />
        <Link to="/" className="text-xl font-bold text-red-600">YouTube Clone</Link>
      </div>
      
      <form onSubmit={handleSearch} className="flex items-center border rounded-full px-4 py-1">
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="outline-none bg-transparent px-2 w-64"
        />
        <button type="submit"><Search size={20} className="text-gray-500"/></button>
      </form>
    </nav>
  );
};

export default Navbar;