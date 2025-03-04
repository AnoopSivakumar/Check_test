import React from 'react'
import { Routes, Route} from "react-router-dom";
import AboutUs from '../Components/AboutUs';
import Banner from '../Components/Banner';
import Books from '../Components/EnglishPages/Books';
import CriticalWorks from '../Components/EnglishPages/CriticalWorks';
import EditedWorks from '../Components/EnglishPages/EditedWorks';
import Life from '../Components/EnglishPages/Life';
import Photo from '../Components/EnglishPages/Photo';
import Poetry from '../Components/EnglishPages/Poetry';
import Portraits from '../Components/EnglishPages/Portraits';
import Programmes from '../Components/EnglishPages/Programmes';
import Translation from '../Components/EnglishPages/Translation';
import Video from '../Components/EnglishPages/Video';
import AdhyapakaGaveshakan from '../Components/pages/AdhyapakaGaveshakan';
import AniyaraShilpi from '../Components/pages/AniyaraShilpi';
import AyyappaPanikkareKurichullaGhrandhangal from '../Components/pages/AyyappaPanikkareKurichullaGhrandhangal';
import EditorSamaaharakarthavu from '../Components/pages/EditorSamaaharakarthavu';
import EnglishGadhyakaran from '../Components/pages/EnglishGadhyakaran';
import Gadhyakaran from '../Components/pages/Gadhyakaran';
import MalayalamKavi from '../Components/pages/MalayalamKavi';
import Niroopakan from '../Components/pages/Niroopakan';
import Vivarthakan from '../Components/pages/Vivarthakan';




const Routing = () => {
  return (
    <div>
        
        <Routes>
     <Route path="/" element={<Banner/>} />
     <Route path="/Kavi" element={<MalayalamKavi/>} />
     <Route path="/vivarthakan" element={<Vivarthakan/>} />
     <Route path="/gadhyakaran" element={<Gadhyakaran/>} />
     <Route path="/niroopakan" element={<Niroopakan/>} />
     <Route path="/editer-samaaharakarthavu" element={<EditorSamaaharakarthavu/>} />
     <Route path="/adhyapakan-gaveshakan" element={<AdhyapakaGaveshakan/>} />
     <Route path="/english-gadhyakaran" element={<EnglishGadhyakaran/>} />
     <Route path="/aniyara-shilpi" element={<AniyaraShilpi/>} />
     <Route path="/ayyappapanikare-kurichulla-grandhangal" element={<AyyappaPanikkareKurichullaGhrandhangal/>} />
     <Route path="/about-us" element={<AboutUs/>} />
     <Route path="/life" element={<Life/>} />
     <Route path="/poetrys" element={<Poetry/>} />
     <Route path="/translation" element={<Translation/>} />
     <Route path="/edited-works" element={<EditedWorks/>} />
     <Route path="/critical-works" element={<CriticalWorks/>} />
     <Route path="/programmes" element={<Programmes/>} />
     <Route path="/photo" element={<Photo/>} />
     <Route path="/video" element={<Video/>} />
     <Route path="/photo-portraits-and-with-luminaries" element={<Portraits/>} />
     <Route path="/photo-books" element={<Books/>} />
     
     
    </Routes>
    </div>
  )
}

export default Routing