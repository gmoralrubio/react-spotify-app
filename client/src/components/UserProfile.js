
export default function UserProfile({userProfile}) {
  return (
    <div className="mb-10 flex items-center gap-6">
            <div className="w-40 ">
              <img className="rounded-full" src={userProfile.images[0].url} alt="" />
            </div>
            <h1 className="py-10 text-4xl font-bold text-white sm:text-6xl">
              {userProfile.display_name}
            </h1>
          </div>
  )
}
