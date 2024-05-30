import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const nums = [19, 20, 34];
  return nums.map((num) => new ClassRoom(num));
}
