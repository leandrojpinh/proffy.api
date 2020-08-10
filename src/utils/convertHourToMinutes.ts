export default function timeToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  const result = (hour * 60) + minutes;

  return result;
}