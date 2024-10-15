export default function 
() {
   const rv = "p-3  mb-5"
   const other= "pr-6"
  return (
    <>
    
    <div className="text-center ">
            
    <div className="  text mr-7 py-16 ">
      <h1 className="text-5xl pb-8 font-bold">FORMULAIRE D'INSCRIPTION</h1>
      <h2 className= "text-xl">Remplissez ce formalaire avec vos informations personnelles</h2>
     </div>

     <form className=" mb-5">

     <div className={rv}>
        <label className={other}>NOM</label>
        <input type="text" name="Nom" />
        </div>
     
        <div className={rv}>
     
     <label className={other}> Prenom</label>
   
        <input type="text" name="Prenom" />
        </div>
  
        <div className={rv}>
     <label className={other}>Date de Naissance</label>
    
     <input type="date" name="dateNaissance"/>
     </div>
  
     <div className={rv}>

     <label className={other}>PAYS</label>
     <select name="ville">
      <option value="CONGO">Choisir un Pays</option>
      <option value="CONGO">CONGO</option>
      <option value="FRANCE">FRANCE</option>
      <option value="USA">USA</option>
      <option value="BELGIQUE">BELGIQUE</option>
      <option value="CANADA">CANADA</option>
      <option value="CHINE">CHINE</option>
     </select>
     </div>
    
     
      <label className={other}> Genre :</label>
      <input type="radio" name="genre" value="Homme"/>Homme
      <input type="radio" name="genre" value="Femme"/>Femme
    
     
      <div className={rv}>
     <button className="pt-8 font-bold text-2xl">CONFIRMER</button>
     </div>
     </form>
     
      
    </div>

    </>
   
  )
}