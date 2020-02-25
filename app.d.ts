/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  const content: FC
  export default content
}

declare module 'fuse.js'
