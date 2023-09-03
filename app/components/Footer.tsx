// Footer.tsx
import React from 'react';
import Link from 'next/link';
import AuthorCredit from './AuthorCredit';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="p-4 flex flex-col justify-center bg-blue-200">
      <h5 className="mx-auto">Site Name</h5>
      <div className="mx-auto flex flex-col justify-center font-medium text-xl">
        <Link className='mx-auto' href="/about">About</Link>
        <Link className='mx-auto' href="/posts">All Articles</Link>
      </div>
      <div className="mx-auto">
        <AuthorCredit 
          firstName="Christian"
          lastName="Rhodes"
          image='christian.jpg'
        />
      </div>
      <div className="mx-auto body2">
        <p>&copy; {year} Site Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
