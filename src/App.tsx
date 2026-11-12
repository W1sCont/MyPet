import { useState } from 'react';
import { ContentRender } from './components/contentRender';
import { ImgRender } from './components/imgRender';
import type { MyPet } from './types';



function App() {
  const [pet] = useState<MyPet>({
      type: "Регдол (з англ. ragdoll — «ганчіркова лялька»)",
      shortInfo: "Це масивний, пухнастий кіт із яскравими блакитними очима та шовковистою шерстю забарвлення колор-пойнт. Попри великі розміри, ці коти мають надзвичайно лагідний, флегматичний характер і майже позбавлені агресії. Вони сильно прив'язуються до власників, слідують за ними по дому та обожнюють проводити час на руках.",
      stats: [
        "Вага та розмір. Це одна з найбільших домашніх порід. Самці важать від 6 до 9 кг, а самки — від 4 до 6 кг. Повністю дорослішають і набирають форму вони повільно, приблизно до 3–4 років.",
        "Зовнішність. Мають мускулисте тіло, пухнастий хвіст та великі овальні очі насиченого блакитного кольору. Кошенята народжуються повністю білими, а характерне забарвлення (колор-пойнт, міттед або біколор) проявляється з віком.",
        "Шерсть та догляд. Шерсть напівдовга, м'яка і шовковиста, майже без густого підшерстя, тому вона рідко збивається у ковтуни. Вичісувати кота достатньо 1–2 рази на тиждень.",
        "Характер та поведінка. Дуже спокійні, мовчазні (мають тихий, мелодійний голос) і чудово ладнають з дітьми та іншими тваринами. Погано переносять тривалу самотність, оскільки потребують постійної компанії людини.",
        "Важлива особливість безпеки. Через знижений м'язовий тонус і спокійний темперамент регдоли часто не встигають згрупуватися під час падіння з висоти. Крім того, вони не здатні постояти за себе на вулиці, тому порода підходить виключно для домашнього утримання.",
        "Тривалість життя. У середньому регдоли живуть 12–15 років, а за правильного догляду та збалансованого харчування — до 17 років."
      ],
      img: [
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Ragdoll_of_4_Months.jpg/960px-Ragdoll_of_4_Months.jpg?utm_source=uk.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
        "https://ua.cats.com/wp-content/uploads/2020/10/ragdoll-3-768x512.jpg",
        "https://dog-cat.ukr-web.org.ua/uploads/img/2018/04/ragdoll-3.jpg",
        "https://www.purina.ua/sites/default/files/2021-02/CAT%20HERO_0019_Ragdoll.jpg",
        "https://media.istockphoto.com/id/828834924/photo/young-adult-ragdoll-cat-laying-isolated-on-black-background-with-paws-hanging-over-edge.jpg?s=612x612&w=0&k=20&c=WBLfyGBEf_Tbws4zJQc_fT0trDzjNcU3OQey5YXZ3EE=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVwyb4-M8i3y_y7kt9zQ_WljWd-dJIJdO5tq0aEOqDpVvx2wl2",
        "https://vetonline.pro/media/cache/blog_post_view/images/post/redgel.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJX2_T7mW_Re6jRDksRRqdqTJ4cwzbdXroAnxIoKspqi-VkGNl_b3XVg&s=10"
      ]
  });

  return (
    <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <ContentRender {...pet}/>
                    <ImgRender {...pet}/>
                </div>
            </div>
        </div>
  )
}

export default App
