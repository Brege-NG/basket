import image from "../assets/image.jpg"

const Footer = () => {
  return (
    <footer className="bg-black w-full h-96 grid grid-cols-3 py-16">
        <div className="text-white">
          <img src={image} alt="logo"  className="w-14 rounded-full h-auto ml-24"/>
          <h1 className="pt-8 pl-24 text-2xl">Ligue départemental de basketball</h1>
          <h1 className="pt-2 pl-24 text-2xl">Le basket, là où la passion rencontre l'excellence!</h1>
          </div>
      
        <div className="flex flex-col justify-center items-center  ml-20">
          <h1 className="text-white text-2xl font-semibold mb-6">MENU</h1>

          <ul className=" text-white  font-semibold pl-9">
            <li>
              <a href="" className=" hover:text-black">Accueil</a>
              </li>
            <li><a href="" className=" hover:text-black">Ligue&club</a></li>
            <li><a href="" className=" hover:text-black">Joueurs</a></li>
            <li><a href="" className=" hover:text-black">Transferts</a></li>
            <li><a href="" className=" hover:text-black">Publications</a></li>
            <li><a href="" className=" hover:text-black">Calendrier</a></li>
            <li><a href="" className=" hover:text-black">Contacts</a></li>
           </ul>
          </div>
        <div className="mt-3">
          <h1 className="text-white flex justify-end pr-40 text-2xl font-semibold mb-8">CONTACT</h1>
          <h1 className="text-white flex justify-end pr-40 ">+242 O4 402 41 41</h1>
          <h1 className="text-white flex justify-end pr-40">Liguedbb@gmail.com</h1>
          <h1 className="text-white flex justify-end pr-40"> Gymnase Matsima,</h1>
          <h1 className="text-white flex justify-end pr-40">Avenue du Djoué,</h1>
          <h1 className="text-white flex justify-end pr-40">Makelekele Brazzaville,</h1>        
          <h1 className="text-white flex justify-end pr-40">République du Congo</h1>        
          </div>
       
    
    </footer>
  )
}
export default Footer