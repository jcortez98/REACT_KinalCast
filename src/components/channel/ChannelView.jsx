/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactFlvPlayer } from "react-flv-player";
import { Chat } from "../chat/Chat";
import { ChannelDescription } from "./ChannelDescription";
import {useChannelDetails} from "../../shared/hooks/useChannelDetails";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const Stream = ({ streamUrl }) => {
  return (
    <div className="channel-video-container">
      <ReactFlvPlayer width="100%" heigth="100%" url={streamUrl} />
    </div>
  );
};

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
        {channelDetails.isOnline ? (
          <Stream streamUrl={channelDetails.streamUrl} />
        ) : (
          <div className="channel-offline-placeholder">
            <span><h1>OFFLINE 😢</h1></span>
            <span>Canal no está transmitiendo en este momento </span>
          </div>
        )}
        <ChannelDescription
          channelId={channelDetails.id}
          title={channelDetails.title}
          description={channelDetails.description}
          username={channelDetails.username}
          getChannels={getChannels}
        />
      </div>
      <Chat channelId={channelDetails.id}/>
    </div>
  );
};
