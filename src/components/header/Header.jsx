import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { getAllMovie, getMovieSearch } from "../../redux/actions/movieAction";
import "./style.scss";

 import logo from "../../images/movix-logo.svg";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
 const handleNav =() =>{
  navigate('/movies')
 }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
 
  const onSearch = () => {
    search(query);
  };
  const dispatch = useDispatch(); 
  //to search in api
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovie());
    } else {
      dispatch(getMovieSearch(word));
    }
  };

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

 

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <Link to="/">
        <div className="logo "  >
          <img src={logo} alt="" />
        </div>
        </Link>
       
        <ul className="menuItems">
           <li className="menuItem" onClick={handleNav} >
            Movies
          </li>
           <li className="menuItem" onClick={handleNav}  >
          TV Shows

          </li>
          
          
          <li className="menuItem">
          <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>

        <div className="mobileMenuItems">
        <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show...."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={onSearch}
              />
               <VscChromeClose
                                onClick={() => setShowSearch(false)}
                            />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
