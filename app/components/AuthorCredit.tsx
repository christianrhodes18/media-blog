import Image from 'next/image'

interface AuthorInfo {
    firstName: string;
    lastName: string;
    image: string;
    bio?: string;
    creditType?: string;
  }

const AuthorCredit: React.FC<AuthorInfo> = ({ firstName, lastName, bio, image, creditType }) => {
    return (
        <div className="flex flex-row gap-4">
            <Image className="mx-auto w-16 rounded-full" src={`/author/${image}`} alt={firstName} width="52" height="52" />
            <div>
                { creditType
                    ? <p className="subtitle2 mb-0">{creditType} </p>
                    : <p className="subtitle2 mb-0">Made By </p>
                }
                <h6>{firstName} {lastName}</h6>
                {bio && <p className="caption">{bio}</p>}
            </div>
        </div>
    )
}

export default AuthorCredit