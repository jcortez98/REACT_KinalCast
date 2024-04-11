/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Chat } from "./Chat";
import { ChannelDescription } from "./ChannelDescription";
import { useChannelDetails } from "../../shared/hooks/useChannelDetails";
import { LoadingSpinner } from '../../components/LoadingSpinner'

export const ChannelView = ({ getChannels }) => {
    const { isFetching, getChannelDetails, channelDetails } = useChannelDetails();
  
    const { id } = useParams();
  
    useEffect(() => {
      getChannelDetails(id);
    }, []);
  
    if (isFetching) {
      return <LoadingSpinner />;
    }
  
    return (
      <div className="channel-container">
        <div className="channel-video-description-section">
          <div className="channel-offline-placeholder">
            <span>Channel is offline</span>
          </div>
          <ChannelDescription
            channelId={channelDetails.id}
            title={channelDetails.title}
            description={channelDetails.description}
            username={channelDetails.username}
            getChannels={getChannels}
          />
        </div>
        <Chat />
      </div>
    );
  };