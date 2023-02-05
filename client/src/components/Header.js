import React from "react";



function Header() {
  return (
    <header >
      
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <link rel="stylesheet" href="styles.css" />
          <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
          <a class="navbar-brand ark" href="/">Kannan A.R</a>
          <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" class="toggle navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button>
          <div class="navbar-collapse collapse" id="responsive-navbar-nav">
          <div class="navlist navbar-nav">
          <a class="text-link" href="/about">About</a>
          <a class="text-link" href="/#club">Club</a>
          <a class="text-link" href="/work">Work</a>
          <a class="text-link" href="/contact">Contact</a>
          </div>
          </div>
          </div>
        </nav>
    </header>
  );
}

export default Header;
