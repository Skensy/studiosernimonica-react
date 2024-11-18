function ContattiContent() {
  return (
    <>
      <div className="flex justify-center gap-28 flex-wrap px-48 pt-48 text-black">
        <div>
          <h2 className="text-center font-bold text-2xl pb-2">Recapiti</h2>
          <p className="text-center text-gray-700"><a href="tel:+393332325012">+393332325012</a></p>
          <p className="text-center text-gray-700"><a href="mailto:info@studiosernimonica.it">info@studiosernimonica.it</a></p>
        </div>
        <div>
          <h2 className="text-center font-bold text-2xl pb-2">Indirizzo</h2>
          <p className="text-nowrap text-gray-700">Via Largo Igino Garbini 7</p>
          <p className="text-center text-nowrap text-gray-700">Viterbo</p>
        </div>
        <div>
          <h2 className="text-center font-bold text-2xl pb-2">
            Orari Lavorativi
          </h2>
          <p className="text-center text-gray-700">Lun - Ven</p>
          <p className="text-center text-gray-700">09:00 - 13:00<br />15:00 - 18:30</p>
        </div>
      </div>
    </>
  );
}

export default ContattiContent;
