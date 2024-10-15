import image from "../assets/image.jpg"

const Footer = () => {
  return (
    <footer className="bg-black w-full h-80 grid grid-cols-3 py-16">
        <div className="text-white">
          <img src={image} alt="logo"  className="w-12 rounded-full h-auto ml-32"/>
          <h1 className="pt-8 pl-32">Ligue départemental de basketball</h1>
          <h1 className="pt-2 pl-32">Le basket, là où la passion rencontre l'excellence !</h1>
          </div>
      
        <div><h1 className="text-white flex justify-end text-xl font-semibold">MENU</h1></div>
        <div>
          <h1 className="text-white flex justify-end px-20 text-xl font-semibold">CONTACT</h1>
          <h1 className="text-white flex justify-end px-20 text-xl font-semibold">JOUEURS</h1>
          <h1 className="text-white flex justify-end px-20 text-xl font-semibold">Publications</h1>
          </div>
       
    
    </footer>
  )
}
export default Footer