import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function Post({ id, username, userImg, img, caption }) {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <p>{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
    </div>
  );
}

export default Post;
