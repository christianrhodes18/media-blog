// Footer.tsx
import React from 'react';
import Link from 'next/link';
import AuthorCredit from './AuthorCredit';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr className="border-gray-300 dark:border-gray-700" />
      <div className="py-8 sm:pt-16 sm:pb-8 p-4 flex flex-col lg:flex-row align-middle justify-center sm:justify-around">
        <div className='mx-auto'>
          <Link className="mx-auto py-4 font-bold text-2xl" href="/">Aesthete&apos;s Digest</Link>
          <div className="mx-auto flex flex-col justify-center font-medium text-xl py-4">
            <Link className='mx-auto' href="/about">About</Link>
            <Link className='mx-auto' href="/posts">All Articles</Link>
          </div>
        </div>
        {/* <div className="mx-auto mt-8 lg:mt-4 py-4">
          {/* aestehtics links + text *
          <h5>Aesthetics</h5>
          <p>Aesthetics are a great way t</p>
        </div> */}
        <div className="flex flex-col justify-center mx-auto gap-6 body2 py-4">
          <AuthorCredit 
            firstName="Christian"
            lastName="Rhodes"
            image='christian.jpg'
            websiteLink='https://christian-rhodes.com'
            twitterLink='https://twitter.com/chrisrhodesy'
            linkedinLink='https://www.linkedin.com/in/christianrhodes18/'
          />
          <p className="body2">&copy; {year} Aesthete&apos;s Digest. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
