import { cn } from '@/utilities/ui'
import { CMSLink } from '@/components/Link';
import RichText from '@/components/RichText';
import Image from 'next/image'

import type { Grid6MasonryBlock as Grid6MasonryBlockProps } from 'src/payload-types';

export function Grid6MasonryBlock(props: Grid6MasonryBlockProps) {

  const {
    title,
    content,
  } = props;

  return (

    <section className={cn('hanken container')}>

      <h2 className='text-[#FDB73E] text-center text-[40px] font-semibold mb-5'>
        {title}
      </h2>

      <div id='container'>
  <div class="column">
    <div class='box' style="height:70px; background-color: red;">1</div>
    <div class='box' style="height:86px; background-color: orange;">4</div>
  </div>
  <div class="column">
    <div class='box' style="height:130px; background-color: grey;">2</div>
    <div class='box' style="height:110px; background-color: green;">5</div>
  </div>
  <div class="column">
    <div class='box' style="height:90px;">3</div>
    <div class='box' style="height:40px;">6</div>
  </div>
</div>

    </section>

  );

}
