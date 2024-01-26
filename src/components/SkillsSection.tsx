import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { InViewelEmentType } from '../App';
import { intersectionObserverOptions } from '../utils/intersectionObserverOptions';

type SkillsSectionProps = {
  setInViewElemnt: (inViewElement: InViewelEmentType) => void;
};

export default function SkillsSection({ setInViewElemnt }: SkillsSectionProps) {
  const { ref, inView } = useInView(intersectionObserverOptions);

  useEffect(() => {
    if (inView) {
      setInViewElemnt('skills');
    }
  }, [inView, setInViewElemnt]);

  return (
    <div ref={ref} id="skills" className="section">
      <div className="skills-content">
        <h1 className="section-title">Skills.</h1>
        Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
        rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed
        ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
        Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero
        venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros
        faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Vero, suscipit?
        Laborum dolores, hic dolore voluptate architecto voluptatibus tenetur
        ipsum quisquam veritatis repellat. Voluptatibus vitae molestias corrupti
        eligendi ex unde, saepe ut corporis recusandae. Fuga nemo id aliquid
        facilis facere impedit quasi magnam excepturi! Pariatur enim, facere
        asperiores corporis, suscipit reprehenderit sint voluptatem omnis
        repellat eligendi obcaecati animi, in minus molestiae explicabo eaque?
        Eveniet amet optio unde velit animi assumenda temporibus consequatur
        quod, quos mollitia facilis dolores quae architecto qui, voluptate illum
        delectus labore. Molestias beatae in veniam. Sunt veritatis corporis
        ullam doloribus, quis molestiae eaque temporibus. Placeat quo dicta ab
        temporibus atque sint repudiandae ipsa quia tenetur. Soluta eius,
        temporibus repudiandae natus tempore asperiores minima delectus dicta,
        iure illum atque? Architecto rerum cumque, culpa quas exercitationem
        illo. Magnam cumque accusantium vero! Consequuntur ullam aliquid dolores
        odit et eveniet incidunt inventore voluptate ipsa officiis voluptatem
        ducimus, rerum quia optio sit ut. Ipsum est quae consequuntur dolorem at
        corrupti? Accusantium, numquam recusandae animi fugit accusamus ad,
        quibusdam, facere expedita ullam ea quod dicta similique. Eius ipsum
        delectus tempora, doloribus hic aperiam officiis rerum laudantium sint
        praesentium commodi atque aut obcaecati ducimus aliquid possimus a ullam
        veritatis dolorum nemo perferendis provident facilis voluptatibus! Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Sed esse cumque,
        beatae autem fugiat alias odio accusamus repellendus quae, qui ad at?
        Cupiditate beatae inventore repellat officia nemo excepturi aliquam eum
        ea nostrum quia recusandae nulla tenetur, doloremque ad maxime molestias
        repellendus dicta deleniti possimus! Non dolores repellat, nobis,
        necessitatibus ab fuga maiores sequi magni tenetur ullam, eius ipsam
        consectetur! Doloribus cum temporibus, autem quam quidem voluptatibus
        alias eum veritatis hic rerum ullam exercitationem illo qui. Voluptas
        facere veniam aliquid repellat officiis obcaecati reprehenderit laborum
        porro voluptatem minus. Obcaecati, repellat dignissimos explicabo
        consequuntur ad dicta culpa voluptatum facilis dolore ducimus nesciunt
        quas delectus earum aspernatur facere suscipit reprehenderit magnam
        ratione tempora vero odio voluptate veniam libero quasi. Officiis
        incidunt maiores autem ducimus cum, eos error tempore cumque nihil!
        Architecto odio ducimus vitae harum. Corporis voluptates molestias
        exercitationem eaque asperiores minus iste! Incidunt accusantium
        exercitationem dolores corrupti laborum, consequuntur sed aspernatur
        enim illum deleniti qui quaerat. Placeat velit veritatis at, ullam culpa
        sapiente? Illum sapiente voluptate, quisquam est repellendus hic, quo
        adipisci in quos praesentium itaque vero dicta iusto sunt nulla vitae.
        Numquam quas nemo alias a sit rem magni exercitationem est possimus
        placeat ullam consequuntur, animi amet dicta provident ut quibusdam.
        Accusantium exercitationem minima, praesentium autem reiciendis neque
        iure rem magnam officia error esse eaque, consequuntur dolore
        dignissimos rerum aperiam nobis itaque nulla ea. Dicta perspiciatis,
        consectetur, at debitis, distinctio praesentium id totam vero sint
        possimus nulla explicabo dolor? Quaerat, at ex. Repellendus error illo
        explicabo consectetur rem atque quis vitae molestiae, dolor perspiciatis
        culpa, quia eius molestias! Sunt, at, molestiae officia voluptates harum
        laboriosam dignissimos inventore, unde deleniti reprehenderit nulla odio
        vel? Alias accusantium adipisci iusto aut numquam deserunt impedit
        ipsam, dicta expedita cumque vel! Voluptas ex hic voluptatum voluptate,
        veritatis rem assumenda suscipit incidunt libero sit sapiente iusto!
      </div>
    </div>
  );
}
