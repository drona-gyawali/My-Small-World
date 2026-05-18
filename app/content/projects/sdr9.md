## System Architecture

SecureTransfer relies on **WebRTC Data Channels** to facilitate direct communication between browsers.

### How it Works

1. **The Handshake:** The **Sender** creates a room, which generates a unique WebRTC "Offer."
2. **Signaling:** The **Receiver** joins via a shared link or email invitation. We use a Socket.io signaling server to exchange connection metadata.
3. **The Connection:** Once the peers find each other via STUN servers, the connection becomes purely P2P.
   - _Note:_ Success rates for STUN-based connections are typically around 80%. If a connection fails, it is usually due to restrictive firewalls (Symmetric NAT), not the software itself.
4. **The Transfer:** Files are broken into small chunks, sent over the data channel, and reassembled in real-time on the receiver's end.

### The "Hard Part": Chunking & Assembly

Handling files over 1GB without crashing the browser was the primary challenge.

- **Memory Management:** To avoid memory overflow, we don't load the whole file at once. We slice the file into `ArrayBuffer` chunks.
- **Reassembly:** On the receiver side, we manage `Uint8Array` fragments, ensuring they are reassembled in the correct order to maintain file integrity.

---

## Tech Stack

- **Frontend:** React (UI & WebRTC implementation)
- **Signaling Server:** Node.js (Express & Socket.io)
- **Email Queue:** BullMQ + Redis (Handles invitation delivery)
