import React,{ useState } from 'react'
import useCollapse from 'react-collapsed'                           
// import NewAnnouncements from './NewAnnouncements';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
    const { ref: poemsRef, inView: poemsInView } = useInView({
        triggerOnce: true,  
        threshold: 0.5,     
      });
    
      const { ref: essaysRef, inView: essaysInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
      const { ref: criticalRef, inView: criticalInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
      const { ref: booksTranslatedRef, inView: booksTranslatedInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
      const { ref: booksEditedRef, inView: booksEditedInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
    
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    
  return (
    <div>
      {/* <div className="marquee">
  <span>Text to scroll goes here</span>
</div> */}
        <div className='   '>
            <div className='text-tb text-center font-semibold text-2xl font-inter font-mal'>
            കെ. അയ്യപ്പപ്പണിക്കർ
            </div>
            <div className=' text-center font-semibold  text-2xl font-inter '>
                    Ayyappa Paniker
            </div>
        </div>



<div className="md:flex justify-around mt-4 gap-4">

  {/* Left section with biography in Malayalam */}
  <div className="basis-1/4 mt-2 p-3 shadow-lg rounded-xl" data-aos="fade-right">
    <div className="text-center text-xl font-semibold font-mal">ജീവിതരേഖ</div>
    <div className="max-w-md mx-auto text-justify relative font-mal">
      <p className="">
      1930 സെപ്തംബർ 12-ന് ആലപ്പുഴ ജില്ലയിൽ കുട്ടനാട്ടിലെ കാവാലത്ത് ജനിച്ചു. 
             സ്കൂൾ വിദ്യാഭാസം ജന്മനാട്ടിൽ. കോഴിക്കോട് മലബാർ ക്രിസ്ത്യൻ കോളേജിൽ നിന്ന് 
             ഇന്റർമീഡിയറ്റ്, തിരുവനന്തപുരം യൂണിവേഴ്സിറ്റി കോളേജിൽ നിന്ന് ബി.എ. ഓണേഴ്സ്. 
             അമേരിക്കയിലെ ഇൻഡ്യാന സർവകലാശാലയിൽനിന്ന് എം.എ., പി.എച്ച്.ഡി. ബിരുദങ്ങൾ, 
             യേൽ, ഹാർവാഡ് സർവകലാശാലകളിൽ നിന്ന് പോസ്റ്റ് ഡോക്ടറൽ ബിരുദം. 1951-ൽ 
             അധ്യാപകജോലിയിൽ പ്രവേശിച്ചു. കോട്ടയം സി.എം.എസ്. കോളേജ്, തിരുവനന്തപുരം 
             എം.ജി. കോളേജ്, യൂണിവേഴ്സിറ്റി കോളേജ് തുടങ്ങിയ സ്ഥാപനങ്ങളിൽ പഠിപ്പിച്ചു. 
             കേരള സർവകലാശാലയുടെ ഇംഗ്ലീഷ് വിഭാഗത്തിൽ 1965-ൽ നിയമനം ലഭിച്ചു. ഇൻസ്റ്റിറ്റ്യൂട്ട് 
             ഓഫ് ഇംഗ്ലീഷിന്റെ തലവനായി 1990-ൽ വിരമിച്ചു. യു.ജി.സി. യുടെ നാഷണൽ ലെക്ചറർ 
             ആയും വിവിധ വിദേശ സർവകലാശാലകളിലെ വിസിറ്റിംഗ് പ്രൊഫസർ ആയും 
             സേവനമനുഷ്ടിച്ചിട്ടുണ്ട്.<br/>1961-ൽ ശ്രീമതി എം.ആർ. പാർവതിയെ വിവാഹം കഴിച്ചു. 
             രണ്ടു പെൺമക്കൾ; മീരാദേവി, മീനാകുമാരി. 

      </p>
      <p {...getCollapseProps()}>
      അയ്യപ്പപ്പണിക്കർ സമ്പൂർണ കൃതികളിൽ ആദ്യകവിതയായി കാണുന്ന "എന്റെ ഭിത്തിമേൽ 1951-ലെഴുതിയതാണ്. അതിനുമുമ്പ് 
പല കവിതകളെഴുതിയിട്ടുണ്ടെങ്കിലും അയ്യപ്പപ്പണിക്കരും നിരൂപകരും അദ്ദേഹത്തിന്റെ കാവ്യ വ്യക്തിത്വത്തെ പ്രതിപാദിക്കുന്ന 
കാലഘട്ടം 1951 മുതൽ 2006 വരെയാണ്. അവസാനകവിത 2006-ൽ എഴുതിയ "വെള്ളമേഘങ്ങൾ', മൂന്നു തലമുറകളെ സ്വാധീനിച്ച 
ഈ കവി ആധുനികതയുടെയും, ഉത്തരാധുനികതയുടെയും അഗ്രഗാമിയായിട്ടാണ് വിശേഷിപ്പിക്കപ്പെടുന്നത്. കാവ്യ രചനകളോളം 
തന്നെ വിപുലവും വൈവിധ്യമേറിയതാണ് അദ്ദേഹത്തിന്റെ ഗദ്യരചനകളും, എഴുന്നൂറ്റി പതിന്നാലിലേറെ കവിതകളും മുന്നൂറ്റിയമ്പതിലേറെ 
ലേഖനങ്ങളും അയ്യപ്പപ്പണിക്കർ എഴുതിയിട്ടുണ്ട്. 1960-കളിൽ ആരംഭിച്ച വിവർത്തനയുഗത്തിന്റെയും പ്രോത്ഘാടകനായിരുന്നു അയ്യപ്പപ്പണിക്കർ. 
കവിതയിലും ഗദ്യത്തിലുമായി പത്ത് വിവർത്തനഗ്രന്ഥങ്ങൾ അദ്ദേഹത്തിന്റെ പേരിലുണ്ട്. മലയാളത്തിൽ പ്രസിദ്ധീകരിക്കപ്പെട്ടിട്ടുള്ള സമ്പൂർണ 
ഷേക്സ്പിയർ കൃതികൾ, വിശ്വസാഹിത്യമാല, ലോകകഥ, മധ്യകാല മലയാളകവിത, തുടങ്ങി പത്തോളം സമാഹാരങ്ങളുടെ എഡിറ്റർ ആണ് അദ്ദേഹം. 
ഇംഗ്ലീഷിൽ പതിനാല് ഗ്രന്ഥങ്ങൾ രചിക്കുകയും, നാല്പത്തിയാറ് പുസ്തകങ്ങൾ എഡിറ്റ് ചെയ്യുകയും ചെയ്തിട്ടുണ്ട്. ഇംഗ്ലീഷിലും മലയാളത്തിലുമുള്ള 
അദ്ദേഹത്തിന്റെ ആഴത്തിലുള്ള അറിവ് എൻസൈക്ലോപീഡിയ ബിട്ടാനിക്ക പോലും പ്രയോജനപ്പെട്ടിട്ടുണ്ട്. 1960 മുതലുള്ള മിക്കവാറും എല്ലാ 
സാംസ്കാരിക സംരംഭങ്ങളുടെയും നായകസ്ഥാനത്തു അദൃശ്യനായി അയ്യപ്പപ്പണികരുണ്ടായിരുന്നു. ലിറ്റിൽ മാഗസിനുകളുടെ, നാടക കളരികളുടെ, 
ചൊൽക്കാഴ്ചകളുടെ, കവിയരങ്ങുകളുടെ, ചിത്രകലയുടെ, പാരമ്പര്യകലകളുടെയൊക്കെ പ്രചോദനമായി, സഹായിയായി പണിക്കരുണ്ടായിരുന്നു. 
സമകാലികരായിട്ടുള്ള ലോകത്തിലെ എല്ലാ പ്രമുഖ എഴുത്തുകാരുമായും പണിക്കർക്ക് ഗാഢമായ ബന്ധമാണുണ്ടായിരുന്നത്. നോബൽ 
സമ്മാനജേതാക്കളും മറ്റ് ആഗോളപ്രസിദ്ധരായ പല എഴുത്തുകാരുമായി അദ്ദേഹം അഭിമുഖങ്ങൾ നടത്തുകയോ അവരെ പരിചയപ്പെടുത്തിക്കൊണ്ടുള്ള 
മലയാളകൃതികൾക്കു മുഖവുരകളും കുറിപ്പുകളും തയ്യാറാക്കുകയോ ചെയ്തിട്ടുണ്ട്. അനേകം രാജ്യങ്ങളിൽ ഭാരതത്തെ പ്രതിനിധീകരിച്ച് 
കവിസമ്മേളങ്ങളിൽ പങ്കെടുത്തിട്ടുണ്ട്.<br/> കേരള, കേന്ദ്ര സാഹിത്യഅക്കാദമി അവാർഡുകളും, പത്മശ്രീ ബഹുമതിയും, ഫ്രാൻസിലെ പോൾ 
ഡി മാൻ മ്യൂസിയം ഏർപ്പെടുത്തിയ ലോകകവിതക്കുള്ള പുരസ്കാരവും ലഭിച്ചിട്ടുണ്ട്. സരസ്വതി സമ്മാനവും, കബീർ പുരസ്കാരവും ഉൾപ്പടെ 
ധാരാളം പുരസ്കാരങ്ങൾ അയ്യപ്പപ്പണിക്കർക്ക് ലഭിച്ചിട്ടുണ്ട്. 2006 ആഗസ്റ്റ് 23-ന് ശ്വാസകോശസംബന്ധിയായ രോഗം മൂലം അദ്ദേഹം അന്തരിച്ചു.<br/> 
അയ്യപ്പപ്പണിക്കർ എന്ന വ്യക്തിയെക്കുറിച്ചും അദ്ദേഹത്തിന്റെ സാംസ്കാരിക സാഹിത്യ സംഭവനകളെക്കുറിച്ചുമായി പതിനാലോളം ഗ്രന്ഥങ്ങൾ 
രചിക്കപ്പെട്ടിട്ടുണ്ട്.
      </p>
      <button
        className="hover:bg-tb hover:text-white mt-2"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  </div>

  {/* Center section with the image */}
  <div className="justify-center basis-1/4 mt-2" data-aos="zoom-in">
    <img
      src={require(`../assets/Ayyappapanickar 1.png`)}
      className="max-w-md mx-auto"
      alt=""
    />
    <div className="text-center font-semibold text-xl mt-2">1930 - 2006</div>
  </div>

  {/* Right section with English Biography */}
  <div className="basis-1/4 mt-2 p-3 shadow-lg rounded-xl" data-aos="fade-left">
    <div className="text-center text-xl font-semibold">Biography</div>
    <div className="max-w-md mx-auto text-justify mt-2">
    Kesavapaniker Ayyappa Paniker, poet, professor and critic, has been a 
        pioneer of modernism in Kerala. His influence has been profound and far-reaching in the entire cultural and intellectual 
        life of the Malayali. If, in poetry, Paniker could be seen as the harbinger of a new voice, in the field of literary 
        criticism he ushered in a paradigm shift towards a radically newer awareness. His influence on modern Malayalam theatre 
        and on new playwrights has been of equal importance. G Sankara Pillai, Kavalam Narayana Paniker and Narendra Prasad have all 
        come under his sphere of thinking at one time or the other. Similar has been the case with film and film-makers like G Aravindan, 
        John Abraham and actors like Bharat Gopi and Nedumudi Venu. Among the visual artists, Paniker's influence is evidenced by his 
        long-standing association with MV Devan, Paris Viswanathan and others. Above all, Ayyappa Paniker has come to be regarded as an 
        icon of modernist culture and thinking. A widely travelled scholar and poet of international renown, he is a unique instance of 
        creative and intellectual genius.
    </div>
  </div>

</div>



   <div className="lg:grid lg:grid-cols-5 lg:gap-6 md:grid md:grid-cols-3 md:gap-4 sm:grid sm:grid-cols-2 sm:gap-y-4 p-5 items-center h-auto" data-aos="zoom-in">
      <div className="mr-2 justify-center text-center" ref={poemsRef}>
        <div className="text-tb text-center font-semibold text-3xl font-inter">
          {poemsInView && <CountUp start={0} end={714} duration={2.5} separator="," />}
        </div>
        <div className="sm:text-xl">Poems</div>
      </div>
      <div className="mr-2 justify-center text-center" ref={essaysRef}>
        <div className="text-tb text-center font-semibold text-3xl font-inter">
          {essaysInView && <CountUp start={0} end={350} duration={2.5} separator="," />}
        </div>
        <div className="sm:text-xl">Essays</div>
      </div>
      <div className="mr-2 justify-center text-center" ref={criticalRef}>
        <div className="text-tb text-center font-semibold text-3xl font-inter">
          {criticalInView && <CountUp start={0} end={30} duration={2.5} separator="," />}
        </div>
        <div className="sm:text-xl">Critical works</div>
      </div>
      <div className="mr-2 justify-center text-center" ref={booksTranslatedRef}>
        <div className="text-tb text-center font-semibold text-3xl font-inter">
          {booksTranslatedInView && <CountUp start={0} end={10} duration={2.5} separator="," />}
        </div>
        <div className="sm:text-xl">Books translated</div>
      </div>
      <div className="mr-2 justify-center text-center" ref={booksEditedRef}>
        <div className="text-tb text-center font-semibold text-3xl font-inter">
          {booksEditedInView && <CountUp start={0} end={58} duration={2.5} separator="," />}
        </div>
        <div className="sm:text-xl">Books edited</div>
      </div>
    </div>


<div className='justify-center flex mt-2 ' >
<img src={require(`../assets/Rectangle 14.png`)} className=" object-center  " alt=""/>
</div>

{/* <NewAnnouncements/> */}

    </div>
  )
}

export default Banner