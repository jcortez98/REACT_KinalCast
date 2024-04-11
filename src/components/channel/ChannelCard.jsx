/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const imageUrl= 'https://i.pinimg.com/736x/dc/9c/61/dc9c614e3007080a5aff36aebb949474.jpg'

const ChannelAvatar = ({url}) => {
    return (
        <div className="channels-avatar-container">
            <img src={url || imageUrl} width='100%' height='100%' alt="avatar" />
        </div>
    )
}
export const ChannelCard = ({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler,
}) => {
    const handleNavigate = () => {
        navigateToChannelHandler(id)
    }
    
  return (
    <div className="channels-card" onClick={handleNavigate}>
        <ChannelAvatar url={avatarUrl}/>
        <span className="channels-card-tittle">{title}</span>
        <span className="channels-card-tittle">{username}</span>
        <span className="channels-card-tittle" style={{ color: isOnline ? 'green' : 'red'}}>
            {isOnline ? 'Online' : 'Offline'}
        </span>
    </div>
  )
}
