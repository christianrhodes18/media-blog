import Image from 'next/image'
import Link from 'next/link';

interface AuthorInfo {
    firstName: string;
    lastName: string;
    image: string;
    bio?: string;
    creditType?: string;
    websiteLink?: string;
    twitterLink?: string;
    linkedinLink?: string;
}

const AuthorCredit: React.FC<AuthorInfo> = ({ firstName, lastName, bio, image, creditType, websiteLink, twitterLink, linkedinLink }) => {
    return (
        <div className="flex flex-row gap-4 align-bottom">
            <Image className="mx-auto w-20 h-20 rounded-full" src={`/author/${image}`} alt={firstName} width="52" height="52" />
            <div className="">
                { creditType
                    ? <p className="subtitle2 mb-0">{creditType} </p>
                    : <p className="subtitle2 mb-0">Made By </p>
                }
                <h6>{firstName} {lastName}</h6>
                {bio && <p className="caption">{bio}</p>}

                {/* social links - light mode */}
                <div className="dark:hidden flex flex-row mt-2 justify-center gap-8 align-middle">
                    {websiteLink && (
                        <Link href={websiteLink}>
                            <Image className="mx-auto w-6" src="/icons/website_light.svg" alt="website" width="24" height="24" />
                        </Link>
                    )}
                    {twitterLink && (
                        <Link href={twitterLink}>
                            <Image className="mx-auto w-6" src="/icons/x_twitter_light.svg" alt="X-Twitter" width="24" height="24" />
                        </Link>
                    )}
                    {linkedinLink && (
                        <Link href={linkedinLink}>
                            <Image className="mx-auto w-6" src="/icons/linkedin_light.svg" alt="LinkedIn" width="24" height="24" />
                        </Link>
                    )}
                </div>
                {/* social links - dark mode */}
                <div className="hidden dark:flex flex-row mt-2 justify-center gap-8 align-middle">
                    {websiteLink && (
                        <Link href={websiteLink}>
                            <Image className="mx-auto w-6" src="/icons/website_dark.svg" alt="website" width="50" height="50" />
                        </Link>
                    )}
                    {twitterLink && (
                        <Link href={twitterLink}>
                            <Image className="mx-auto w-6" src="/icons/x_twitter_dark.svg" alt="X-Twitter" width="50" height="50" />
                        </Link>
                    )}
                    {linkedinLink && (
                        <Link href={linkedinLink}>
                            <Image className="mx-auto w-6" src="/icons/linkedin_dark.svg" alt="LinkedIn" width="50" height="50" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthorCredit