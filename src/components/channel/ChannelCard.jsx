/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const imageUrl= 'https://static.vecteezy.com/system/resources/previews/000/442/172/original/vector-video-camera-icon.jpg'

const ChannelAvatar = ({url}) => {
    const displayUrl = url !== 'none' ? url : imageUrl;
    return (
        <div className="channels-avatar-container">
            <img src={displayUrl} width='100%' height='100%' alt="avatar" />
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
