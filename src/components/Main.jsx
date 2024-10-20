import basket_header from "../assets/basket_header.jpg"
import anbc from "../assets/anbc.jpg"
import image from "../assets/image.jpg"
import bask from "../assets/bask.jpg"
import baski from "../assets/baski.jpg"
import president from "../assets/president.jpg"
import fleche from "../assets/fleche.jpg"
import cahier from "../assets/cahier.jpg"



const Main = () => {
  return (
   <main>
     <section>
      <div className="relative">
      <img src={basket_header} alt="logo"  className="w-full h-240 "/>
      <div className="absolute top-72 right-20">
      <p className=" text-white font-bold text-7xl">Le basket, plus qu'un jeu,
      </p>
      <br />
      <p className=" text-white font-bold text-7xl ml-32">une passion qui unit !</p>
      </div>
      <button className=" absolute top-96 right-24 bg-green-600 mt-32 px-2 py-2 text-3xl text-white">
        inscrivez vous maintenant
      </button>
      
      </div>
     </section>

     <h1 className="pt-14 flex justify-center text-4xl font-semibold">Dernier resultat des matchs</h1>

     <section className="pt-10 align-text-top flex items-center justify-center">
      
      <div className="pt-2">
      <img src={anbc} alt="logo"  className="w-28 rounded-full h-auto mr-32"/>
      <p className="pt-4 pl-10 font-semibold">CARA</p>
      </div>
     

     <div className="flex items-center relative">
     
         <div className="flex items-center justify-center pl-7 w-28 h-24 bg-black">
             <p className="text-white text-lg font-bold pr-6">72</p>
        </div>

          <h1 className="font-semibold text-2xl px-5">VS</h1>

         <div className="flex items-center justify-center pl-7 w-28 h-24 bg-black">
             <p className="text-white text-lg font-bold pr-6">56</p>
        </div>

        <div className="text-center absolute w-full h-8 bg-gray-400 text-white  font-bold top-24">
                 26Avril 2024 | 22hr
         </div>
     </div>

<div>
<img src={image} alt="logo"  className="w-28 rounded-full h-auto ml-32"/>
<p className="pt-4 pl-32 font-semibold">ANGES NOIRS</p>
</div>
        
     </section>

     <section className="mx-52 my-16 bg-gray-400 w-auto h-48  grid md:grid-cols-3 text-center">

        <div>
            <p className="text-6xl font-bold pt-8">230</p>
            <p className="pt-2 text-gray-600">Matchs joués</p>
            </div>

        <div>
            <p className="text-6xl font-bold pt-8">30</p>
            <p className="pt-2  text-gray-600">Equipes</p>
        </div>

        <div>
            <p className="text-6xl font-bold pt-8">24</p>
            <p className="pt-2  text-gray-600">Trophées gagnés</p>
            </div>
        
     </section>

     <section>
     <img src={basket_header} alt="logo"  className="w-full h-56 object-cover"/>
     </section>

     <section >

        <div className="grid grid-cols-2 pt-20 text-center ">
            <div className="relative ml-32">
            <img src={president} alt="logo"  className="w-2/5 ml-16 pb-10 mt-2"/>
            
            <div className="">
            <img src={bask} alt="logo"  className="border-2 border-white rounded-lg shadow-lg absolute w-80 top-28 pt-8 h-72 ml-60 pb-10 "/>
            </div>
            </div>
        <div>
            <div className="relative">
            <img src={fleche} alt="logo"  className=" top-10 left-0 absolute w-20 h-auto ml-32"/>

            <h1 className="text-4xl font-semibold text-green-800">Découvrez notre histoire</h1>
            <p className="pt-5 pr-36 pl-64 text-justify">L'histoire de notre ligue de basket ,réunir les passionnés
               de basket autour d'un championnat compétitif et inspirant. 
               Tout ce qui n'était qu'une série de tournois régionaux a 
               rapidement pris de l'ampleur. Grâce à la passion des joueurs, 
               des entraîneurs et des supporters, notre ligue est devenue 
               un véritable symbole de développement sportif. Année après 
               année, nous avons évolué, en intégrant de nouvelles équipes, 
               en améliorant nos infrastructures et en perfectionnant nos 
               règlements pour offrir une compétition toujours plus excitante.</p>
            </div>

              <div className="relative">
              <img src={fleche} alt="logo"  className=" top-16 left-0 absolute w-20 h-auto ml-32"/>
              <h1 className="text-4xl font-semibold text-green-800 pt-8 text-center pr-44">notre mission</h1>
              <p className="pt-5 pr-36 pl-64 text-justify">la ligue de basket assure la régulation, la gestion et la 
                  promotion du sport, jouant un rôle essentiel dans le bon 
                  fonctionnement des compétitions et la préservation.</p>
              </div>
    
        </div>


        </div>

        <div className="relative">
        <img src={cahier} alt="logo"  className=" top-32 left-0 absolute w-20 h-auto ml-32"/>
        <h1 className="text-4xl font-semibold text-green-800 text-start pt-20 ml-80">notre role</h1>
        <p className="pt-5 mr-96 ml-80 py-12 text-justify">Le rôle de la ligue de basket est d'organiser les compétitions, 
de réguler les transferts de joueurs, et de garantir le respect des  règles et de l'équité financière entre les clubs.
La ligue de basket joue un rôle fondamental dans l'organisation et la régulation du sport à un niveau performant. Elle est responsable 
de la gestion des compétitions, notamment en élaborant le calendrier des matchs et en structurant les tournois, des phases régulières 
aux éliminatoires.</p>
        </div>
             </section>
             <div className="flex items-center justify-center">
             <button className="bg-green-600 w-40 h-10 text-white mt-12 ">En savoir plus</button>
             </div>

    <section className=" flex items-center justify-between pt-0">
    
    <div className="pl-12 relative flex ">
      <div className="bg-green-600 w-48 h-96 ">
      </div>

      <div className=" absolute bg-black w-48 h-80  left-52">
      </div>
    </div>

      <div>
        <img src={baski} alt="" className="w-200 pb-10" />
      </div>
      <div className=" pr-32">
        <table class=" w-96 h-80 border-collapse border border-gray-200">
  <thead>
    <tr>
      <th class="bg-green-500 text-white">classements</th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="bg-black text-white">Donnée 1</td>
  
    </tr>
    <tr>
      <td class="border border-gray-200 p-4">Donnée 4</td>
    
     
    </tr>
  </tbody>
</table>
</div>
    </section>


    <section>
      <div className="bg-green-600 w-full h-36 flex justify-around items-center">
      <h1 className="text-white  pt-0 pl-36 font-semibold text-2xl">Rejoignez nous pour suivre les dernières actualités des matchs</h1>
      <button className="bg-white w-36 h-10">
        contactez nous
      </button>
      </div>

    </section>
   </main>
  )
}
export default Main