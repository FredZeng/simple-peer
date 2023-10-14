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
  /**
   * @default false
   */
  allowHalfTrickle?: boolean;
  wrtc?: {
    RTCPeerConnection: RTCPeerConnection,
    RTCSessionDescription: RTCSessionDescription,
    RTCIceCandidate: RTCIceCandidate,
  };
  objectMode?: boolean;
  /**
   * @default 5000
   */
  iceCompleteTimeout?: number;
}

export default class Peer extends stream.Duplex {
  static WEBRTC_SUPPORT: boolean;
  static config: RTCConfiguration;

  /**
   * @default {}
   */
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

  public readonly destroyed: boolean;
  public readonly destroying: boolean;

  private _pc: RTCPeerConnection;

  constructor(opts?: PeerOpts);

  get bufferSize(): number;

  get connected(): boolean;

  address(): { port?: number; family?: string; address?: string };

  /**
   * {
   *     renegotiate?: boolean;
   *     transceiverRequest?: { kine: string, init?: RTCRtpTransceiverInit };
   *     candidate?: RTCIceCandidate;
   *     sdp?: string;
   * }
   */
  signal(data: string): void;

  send(chunk: ArrayBufferView|ArrayBuffer|Buffer|string|Blob): void;

  addTransceiver(kind: string, init?: RTCRtpTransceiverInit): void;

  addStream(stream: MediaStream): void;

  addTrack(track: MediaStreamTrack, stream: MediaStream): void;

  replaceTrack(oldTrack: MediaStreamTrack, newTrack: MediaStreamTrack, stream: MediaStream): void;

  removeTrack(track: MediaStreamTrack, stream: MediaStream): void;

  removeStream(stream: MediaStream): void;

  negotiate(): void;

  destroy(err?: Error): this;
}
