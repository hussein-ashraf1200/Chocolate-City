import { useEffect } from 'react';
import img43 from "../assets/img/img43.jpg";
import anime from 'animejs';


const Home = () => {
  useEffect(() => {
    // الانيمشن قسمته علي اتنين للدورن والتحرك في محور ال  X
anime({
  targets: '.image-slide',
  translateX: [-1100, 0],     // انتقال على المحور X من -1100 إلى 270
  duration: 5000,               // مدة الانتقال على المحور X (يمكنك ضبطها حسب السرعة المطلوبة)
  easing: 'easeOutExpo',        // تسهيل عند الوصول إلى الموضع النهائي
  complete: function() {
    // الدوران اللانهائي بعد انتهاء الحركة الأفقية
    anime({
      targets: '.image-slide',
      rotate: '+=360',           // استمرار الدوران
      duration: 5000,            // مدة كل دورة دوران
      easing: 'linear',          // تسهيل مستمر للحركة الدائرية
      loop: true                 // تكرار الدوران إلى ما لا نهاية
    });
  }
});
anime({
  targets: '#animation-title',
  translateY: 50,
  duration: 3000
});
anime({
  targets: ' #animation-title',
  translateY: 70,
  duration: 4000
});
anime({
  targets: ' #animation-title',
  translateY: 90,
  duration: 5000
});
}, []); // تفعيل الأنيميشن مرة واحدة عند تحميل المكون

  return (
    <div

  className="flex flex-row justify-center items-center mt-36 mb-24">
      {/* img slide */}
      <div className="w-1/2 flex justify-center items-center">
        <img className="w-28 h-28 sm:w-52 sm:h-52 rounded-full image-slide mt-28" 
        src={img43} alt="chocolate" /> 
      </div>
      {/* img slide */}
       
      {/* paragraf */}
      <div  className="w-1/2 flex flex-col justify-center items-center font-bold text-2xl">
        <h1 id="animation-title">Chocolate City</h1>
        <h3 id="animation-title" className="mt-6 ">Let us Inspire You</h3>
      </div>
      {/* paragraf */}
    </div>
  );
}

export default Home;
