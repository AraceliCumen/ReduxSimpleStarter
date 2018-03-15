import React from 'react';

const Header = ({person}) => (
  <header>
     <nav className="navbar navbar-default">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Header {person.name}</a>
          </div>
        </div>{/* /.container-fluid */}
      </nav>
  </header>

)

export default Header