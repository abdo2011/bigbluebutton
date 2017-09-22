import RedisPubSub from '/imports/startup/server/redis2x';
import handlePresentationChange from './handlers/presentationChange';
import handlePresentationInfoReply from './handlers/presentationInfoReply';
import handlePresentationRemove from './handlers/presentationRemove';
import handlePresentationCurrentChange from './handlers/presentationCurrentChange';


RedisPubSub.on('SyncGetPresentationInfoRespMsg', handlePresentationInfoReply);
RedisPubSub.on('NewPresentationEvtMsg', handlePresentationChange);
RedisPubSub.on('PresentationConversionCompletedEvtMsg', handlePresentationChange);
RedisPubSub.on('RemovePresentationEvtMsg', handlePresentationRemove);
RedisPubSub.on('SetCurrentPresentationEvtMsg', handlePresentationCurrentChange);
