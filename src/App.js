import './App.css';
import Nav from './components/Nav';
import Store from './components/Store';
import { Grid, GridItem } from '@chakra-ui/react'
//import HomeW from './components/HomeW';
import Search from './components/Search';
//import React from 'react';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Store
           disc="بادر بالتسجيل في دورة التصميم ثلاثي الأبعاد حيث تمكنك من معرفة أهم آلات التصنيع الرقمي ونمذجة الأفكار والابتكارات"
             name="التصميم ثلاثي الأبعاد"
              expiry="17"
          />
         
          <Store
            name="UI/UX"
            disc="UI/UX تُقدم #أكاديمية_طويق دورة Figma من البداية حتى الاتقان
              باستخدام"
              expiry="17"
          />

          <Store
            name="No-Code"
            disc="تصميم مواقع الويب من الصفر نقدم لكم دورة تصميم المواقع بمنهجية No-Code"
            expiry="20"
          />

          <Store
            name="Git & GitHub"
            disc="Git & GitHub تُقدم #أكاديمية_طويق دورة من البداية حتى الاتقان"
            expiry="25"
          />

          <Store
            name="DS and Machine Learning"
            disc="للتعرف على علم البيانات وكيفية تحليلها ومعالجتها وعرضها ونمذجتها! Data Science and Machine Learning"
            expiry="15"
          />

          <Store
            name="DevOps"
            disc="تعلم أهمية DevOps وأساسياته من خلال تطبيق عملي على أساسيات Linux, Docker, and Docker Compose وذلك بالانضمام لدورة مقدمة في DevOps"
            expiry="14" 
          />

          <Store
            name="دورة تطوير تطبيقات iOS"
            disc="لدورة تطوير تطبيقات iOS باستخدام SwiftUI"
            expiry="10"
          />
          <Store
           disc="بادر بالتسجيل في دورة التصميم ثلاثي الأبعاد حيث تمكنك من معرفة أهم آلات التصنيع الرقمي ونمذجة الأفكار والابتكارات"
             name="التصميم ثلاثي الأبعاد"
              expiry="17"
          />
         
          <Store
            name="UI/UX"
            disc="UI/UX تُقدم #أكاديمية_طويق دورة Figma من البداية حتى الاتقان
              باستخدام"
              expiry="17"
          />

          <Store
            name="No-Code"
            disc="تصميم مواقع الويب من الصفر نقدم لكم دورة تصميم المواقع بمنهجية No-Code"
            expiry="20"
          />

          <Store
            name="Git & GitHub"
            disc="Git & GitHub تُقدم #أكاديمية_طويق دورة من البداية حتى الاتقان"
            expiry="25"
          />

          <Store
            name="DS and Machine Learning"
            disc="للتعرف على علم البيانات وكيفية تحليلها ومعالجتها وعرضها ونمذجتها! Data Science and Machine Learning"
            expiry="15"
          />

          <Store
            name="DevOps"
            disc="تعلم أهمية DevOps وأساسياته من خلال تطبيق عملي على أساسيات Linux, Docker, and Docker Compose وذلك بالانضمام لدورة مقدمة في DevOps"
            expiry="14" 
          />

          <Store
            name="دورة تطوير تطبيقات iOS"
            disc="لدورة تطوير تطبيقات iOS باستخدام SwiftUI"
            expiry="10"
          />
        </Grid>
     
    </div>
  );
}

export default App;