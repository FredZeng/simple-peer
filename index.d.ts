export default class Peer {
  static WEBRTC_SUPPORT: boolean;
  static config: any;
  static channelConfig: any;

  constructor(opts?: any);

  public readonly _id: string;

  get bufferSize(): number;

  get connected(): boolean;

  address(): { port?: number; family?: string; address?: string };
}