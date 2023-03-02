<h3>Site changes</h3>

1. I implemented a dark mode design in my about.html, work.html, and projects.html page. The default/ original theme for my website is a light theme (white background) 
and I made a dark theme as a counterpart for users who want to switch to dark mode. When the user clicks the toggle button in the navbar, the color theme will change 
to dark mode. I decreased the brightness and changed the font colors so that it looks comfortable to the eyes when it changes to dark mode. I also used a filter 
(-webkit-filter) to change the color of the home icon from black to white. 

<h3>3rd Party Script</h3>

1. I modified my portfolio to use Google Analytics by using the <script> tag in my index.html page. The reason I chose to input Google Analytics is because it helps me 
  understand website traffic, where users are coming from, which pages they visited, how long they stayed on the site, etc. This is benefical for my website because 
  I can use it to improve my website performance and increase user engagement to see which links are not clicked on as often as others. A feature that Google Analytics
  has is making sense of the data and converting it into more comprehensive/ appealing charts and graphs.

  <b>Code snippet:</b>
  ```
  <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-VKRN8VQCLK');
  </script>
  ```
