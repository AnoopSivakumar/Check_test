import React from 'react'
import {life,awards,academic} from './Data'

const Life = () => {
  return (
    <div className='p-5'>
          <div className=''>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className="absolute top-6 left-10 text-white font-bold text-2xl">LIFE</h1>
    </div>
    </div>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>
    

    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border text-center px-4 py-2 font-bold w-60">Year</th>
            <th className="border text-center px-4 py-2 font-bold">Biography</th>
           
          </tr>
        </thead>
        <tbody>
            {
                life.map((li)=>(
                    <tr>
                    <td className="border px-4 py-2 ">{li.year}</td>
                    <td className="border px-4 py-2">{li.bio}</td>
                    
                  </tr>
                ))
            }
        </tbody>
      </table>
    </div>
    
      
    
    </div>
          <div className='mt-10'>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className="absolute top-6 left-8 text-white font-bold text-xl ">ACADEMIC CAREER</h1>
    </div>
    </div>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border text-center px-4 py-2 font-bold w-60">Year</th>
            <th className="border text-center px-4 py-2 font-bold">Teaching and Research</th>
           
          </tr>
        </thead>
        <tbody>
            {
                academic.map((li)=>(
                    <tr>
                    <td className="border px-4 py-2">{li.year}</td>
                    <td className="border px-4 py-2">{li.bio}</td>
                    
                  </tr>
                ))
            }
        </tbody>
      </table>
    </div>
    
      
    
    </div>
          <div className='mt-10'>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className="absolute top-6 left-8 text-white font-bold text-xl ">MEMBERSHIPS</h1>
    </div>
    </div>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 '>
    1. Modern Language Association of America<br/>
2. American Studies Research Center<br/>
3. Dravidan Linguistics Associations<br/>
4. Indian Association for English Studies<br/>
5. Advisory Board, Vagartha Poetry Library, Bhopal<br/>
6. CIEFL Society, Hyderabad<br/>
7. Chaya Parishad, Birla Fountation<br/>
8. Kerala University Senate, Academic Council, Faculty of Arts<br/>
9. National Literacy Mission<br/>
10. National Book Trust of India<br/>
11. Poetry Sub-Committee, Festival of India<br/>
12. Raja Ram Mohun Roy Library Fountation<br/>
13. Sahitya Akademi<br/>
14. Sangeet Natak Akademic<br/>
15. University Court, Hyderabad University<br/>
16. Vivekananda Bharat Parikrama Centenary Committee<br/>
17. CV Raman Pillai National Fountation<br/>
            </div>
    
      
    
    </div>
          <div className='mt-10'>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className="absolute top-6 left-8 text-white font-bold text-xl ">CONTRIBUTED TO</h1>
    </div>
    </div>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 '>
    1. Dictionary of National Biography<br/>
2. Encyclopedia Britannica<br/>
3. Frederick Ungar Encyclopedia of 20th Century Literature<br/>
4. Oxford Companion to Indian Theatre<br/>
5. Oxford Companion to Indian Literature<br/>
6. Oxford Guide to World Literature in English Translation<br/>
            </div>
    
      
    
    </div>
          <div className='mt-10'>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className="absolute top-6 left-8 text-white font-bold text-xl ">AWARDS</h1>
    </div>
    </div>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>
    
    <div className="overflow-x-auto">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="border text-center px-4 py-2 font-bold w-60">Year</th>
            <th className="border text-center px-4 py-2 font-bold">Literary Prizes</th>
           
          </tr>
        </thead>
        <tbody>
            {
                awards.map((li)=>(
                    <tr>
                    <td className="border px-4 py-2">{li.year}</td>
                    <td className="border px-4 py-2">{li.bio}</td>
                    
                  </tr>
                ))
            }
        </tbody>
      </table>
    </div>
      
    
    </div>
          <div className='mt-10'>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className="absolute top-6 left-8 text-white font-bold text-xl ">ACADEMIC HONOURS</h1>
    </div>
    </div>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 '>
    1. Fulbright Fellowship, USA. 196<br/>
2. Fulbright Scholarship. 1969-70<br/>
3. ACLS Fellowship (Post-doctoral) at Yale and Harvard. 1980-81<br/>
4. National Lecturer, UGC. 1984-85<br/>
5. Senior Scholar in Residence at ASRC, Hyderabad. 1986-87<br/>
6. Award for Distinguished Teacher from University. 1990<br/>
7. Birla Research Fellowship. 1994-96<br/>
8. British Council Visitorship<br/>
9. International Man of the Year, IBC, Cambridge, UK. 1997<br/>
10. Gandhi Memorial Fellowship. 1997<br/>
11. Indira Gandhi Memorial Fellowship. 1997<br/>
12. Indira Gandhi National Centre for the Arts Fellowship. 1998-2000<br/>
13. Kerala University's International Centre for Kerala Studies Fellowship. 2000<br/>
14. Rockfeller Foundation Scholarship<br/>
15. Kerala Sahitya Akademi Fellowship. 2002<br/>
            </div>
    
      
    
    </div>
          <div className='mt-10'>
    <div className="relative text-center items-center justify-center">
      <img src={require(`./stroke 1.png`)} alt="example"className='w-80'  />
          <h1 className="absolute top-6 left-5 text-white font-bold text-[17px] ">BOOKS ON AYYAPPAPANIKER</h1>
    </div>
    </div>
    <div className='max-w-screen-lg mx-auto text-justify mt-4 font-mal'>
    
    <div className='max-w-screen-lg mx-auto text-justify mt-4 '>
    1. Kaalam midhyaakatha vaaku, Ayyappapaniker foundation Trivandrum,2022<br/>
2. Ayyappapaniker Cholkazhchakalum Chollakazhchakalum, B Sreekumar, Paapathi Pusthakagal Trivandrum 2021<br/>
3. Ayyappapaniker Forever, Folio Trivandrum 2019<br/>
4. Ayyappapaniker, Dr.Anand Kaavalam Chintha Publications Trivandrum 2015<br/>
5. Niraveriya Vakdhanam Ayyappapaniker Ente Kochettan, M Lakshmikuttiamma Folio Trivandrum 2014<br/>
6. Ayyappapanikerum Ayyappapanikerum, M K Sanu, Green Books Thrissur 2014<br/>
7. Ayyappapaniker Nishedhathinte Charuroopam, Prof M.K Sanu DC Books Kottayam 2014<br/>
8. Ayyappapaniker, Dr.M.R Thamban, Kerala Bhasha Institute Trivandrum 2013<br/>
9. Every Thing is Past Tense, Rati Saxena, Kritya Trivandrum 2012<br/>
10. Ayyappapanikarude Narma Sambhashanagalum Narmakavithakalum, DC Books 2011<br/>
11. Ayyappapaniker Jeevitharekha, Ayyappapaniker Foundation Trivandrum DC Bokks Kottayam 2007<br/>
12.Ayyappapaniker Smaranika – Kerala Kavitha 2007<br/>
13. Karutha Chiriyude Kavi, Dr.Samuel Kaattukallil Kerala Bhasha Institute Trivandrum 1999<br/>
14. Ayyappapaniker Vyakthiyum Kavithayum, Editor- Dr. George Onnakkoor DC Books Kottayam 1990<br/>
            </div>
      
    
    </div>


    </div>
  )
}

export default Life