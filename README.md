# Why build a forecast application?
In order to practice and stablish a solid connection with the next.js way of coding, i decided to develop a web application.
However, another thing i have noticed is the lack of beutiful forecast websites available on the internet.
Therefore, i came to the conclusion that i would learn a lot during the project and still be developing something usefull and nice.

# External APIs used for this project
> I could not forget to highlight that all forecasted data is fetched from [Open weather map](https://openweathermap.org/api).
> 
> To get each country's flag, the [Country flags api](https://www.flagsapi.com/) has been used.
> 
> The [Google maps embed api](https://developers.google.com/maps/documentation/embed/get-started) so the city map could be shown.
> 
> The [Serper api](https://serper.dev) to fetch news
>
> And last, the [Lecto AI](https://lecto.ai) to perform translations

# Check the project for yourself!
**Youtube video** > https://www.youtube.com/watch?v=y34j8Q164hg<br />
**Project website** > https://eforecast.joaomellof.com/
![elearning home screen. Header on top, with user info and navigation, and courses cards, in the middle/bottom screen](https://user-images.githubusercontent.com/67838782/162780176-231ce025-4b07-42f0-b4d0-0f28d6b471ef.png "eforecast preview") 
# How can i download and run the project?
With simples steps, it will be able to run everything locally.
<ul>
  <li>
    Make sure you have node installed in your computer. <a href="https://nodejs.org/en/">Check their page for more</a>
  </li>
  <li>
    If you want to clone this repository via git, you'll to install it as well. <a href="https://git-scm.com/">Take a look on their home page</a>
  </li>
  <li>
    Then, simply download the code and start the project, like shown below.
  </li>
</ul>


```git
   // USING Node.js V20 or higher
   git clone https://github.com/Joao-mello-ferrari/e.forecast.git
   cd e.forecast
   npm i
   npm run dev
```
Finally, a .env file must be filled with some api keys ⬇
* The google maps api needs you to create a project and a secret api key, so the maps fetching will be possible.
* The open weather map will require a api key as well.

On the .env.example, you should find the apis key names. Just put your secrets and you will be ready to go!

   # Main concepts used within this project
   * **React**
   * **Styled Components** for  advanced css features
   * **Next.js** for performance and SSR/SSG functionalities
   * **Use of external APIs**, to fetch every data of the application 
   
   # Why use nextJS
<ul>
  <li>
    Next is a performatic REACT framework, which helps a lot in the devolopment of futuristics apps.
  </li>
  <li>
    With functionalities such as SSR and SSG, the user´s experience is preserved, as well as a very optimized platform is built.
  </li>
  <li>
    If thats not enough, next has a beutiful integration with external APIs, such as databases, billing and CMS systems.
  </li>
</ul>
