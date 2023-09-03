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
        <div className="flex flex-col">
            <Image className="mx-auto rounded-full" src={`/author/${image}`} alt={firstName} width="52" height="52" />
            { creditType
                ? <p className="subtitle2">{creditType} </p>
                : <p className="subtitle2">Made By </p>
            }
            <h6>{firstName} {lastName}</h6>
            {bio && <p className="caption">{bio}</p>}
        </div>
    )
}

export default AuthorCredit