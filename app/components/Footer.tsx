// Footer.tsx
import React from 'react';
import Link from 'next/link';
import AuthorCredit from './AuthorCredit';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr className="border-gray-300 dark:border-gray-700" />
      <div className="p-4 flex flex-col lg:flex-row align-middle justify-center">
        <div className='mx-auto'>
          <h5 className="mx-auto py-4">Site Name</h5>
          <div className="mx-auto flex flex-col justify-center font-medium text-xl py-4">
            <Link className='mx-auto' href="/about">About</Link>
            <Link className='mx-auto' href="/posts">All Articles</Link>
          </div>
        </div>
        <div className="mx-auto py-4">
          <AuthorCredit 
            firstName="Christian"
            lastName="Rhodes"
            image='christian.jpg'
          />
        </div>
        <div className="mx-auto lg:my-auto body2 py-4">
          <p>&copy; {year} Site Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
