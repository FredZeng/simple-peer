import stream from 'readable-stream';

interface PeerOpts {
  /**
   * @default false
   */
  allowHalfOpen?: boolean;
  /**
   * @default false
   */
  initiator?: boolean;
  /**
   * @default null
   */
  channelName?: string;
  /**
   * custom webrtc data channel configuration (used by createDataChannel)
   * @default {}
   */
  channelConfig?: RTCDataChannelInit;
  /**
   * custom webrtc configuration (used by RTCPeerConnection constructor)
   */
  config?: RTCConfiguration;
  /**
   * custom offer options (used by createOffer method)
   * @default {}
   */
  offerOptions?: RTCOfferOptions;
  /**
   * custom answer options (used by createAnswer method)
   * @default {}
   */
  answerOptions?: RTCAnswerOptions;
  sdpTransform?: (sdp: string) => string;
  stream?: any;
  streams?: any;
  /**
   * @default true
   */
  trickle?: boolean;
  wrtc?: any;
  objectMode?: boolean;
  /**
   * @default 5000
   */
  iceCompleteTimeout?: number;
}

export default class Peer extends stream.Duplex {
  static WEBRTC_SUPPORT: boolean;
  static config: RTCConfiguration;
  static channelConfig: RTCDataChannelInit;

  public readonly _id: string;
  public channelName: string;
  public readonly initiator: boolean;
  private channelConfig: RTCDataChannelInit;
  private channelNegotiated: boolean;
  private config: RTCConfiguration;
  private offerOptions: RTCOfferOptions;
  private answerOptions: RTCAnswerOptions;
  private sdpTransform: (sdp: string) => string;

  private _pc: RTCPeerConnection;

  constructor(opts?: PeerOpts);

  get bufferSize(): number;

  get connected(): boolean;

  address(): { port?: number; family?: string; address?: string };
}
