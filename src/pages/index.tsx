import { Container } from '@/components/atoms/container';
import { Row } from '@/components/atoms/row';
import { Col } from '@/components/atoms/col';
import { Image } from '@nextui-org/react';

export default function Home() {
  return (
    <Container className='bg-orange-500 h-96 flex items-center justify-center '>
      <Row alignmentY='center' alignmentX='center' className='bg-red-500 h-80'>
        <Col className='sm:w-3/4 md:w-1/4 bg-green-500 h-20  '>
          <div className=''>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/next.svg'
              alt='Next.js Logo'
              width={180}
              height={37}
            />
          </div>
        </Col>

        <Col className='sm:w-3/4 md:w-1/4 bg-yellow-500  '>
          <div className=''>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/next.svg'
              alt='Next.js Logo'
              width={180}
              height={37}
            />
          </div>
        </Col>

        <Col className='sm:w-3/4 md:w-1/4 bg-pink-500 '>
          <div className=''>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/next.svg'
              alt='Next.js Logo'
              width={180}
              height={37}
            />
          </div>
        </Col>

        <Col className='sm:w-3/4 md:w-1/4 bg-blue-500 '>
          <div className=''>
            <Image
              className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
              src='/next.svg'
              alt='Next.js Logo'
              width={180}
              height={37}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
