export const VIDEO_ASSETS = {
  left: 'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_turning_head_right_202608311032.mp4',
  right: 'https://gcfhxssieicuekikmbpf.supabase.co/storage/v1/object/public/Video(htweOo)/Marionette_puppet_turns_head_202608311031.mp4',
};

export const GALLERY_IMAGES: string[] = [
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2010_47_25%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2010_51_39%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2011_03_10%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2010_58_16%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2011_03_10%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2011_05_16%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2011_41_55%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2011_42_01%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2011_47_20%20AM.png',
  'https://adaqzhgwpspddfaffslz.supabase.co/storage/v1/object/public/videos/ChatGPT%20Image%20Aug%2031,%202026,%2011_47_33%20AM.png',
];

export const SYMBOLS = ['8', '$', '^^', '%', '/'];

export const EASE_BEZIER: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export function buildLayout(count: number, cols: number): number[][] {
  const rows: number[][] = [];
  let imgIdx = 0;
  let r = 0;
  while (imgIdx < count) {
    const row = new Array(cols).fill(-1);
    const a = (r * 2 + (r % 2)) % cols;
    row[a] = imgIdx;
    imgIdx++;

    if (r % 3 === 0 && imgIdx < count) {
      let b = (a + 2) % cols;
      if (b === a) {
        b = (a + 1) % cols;
      }
      row[b] = imgIdx;
      imgIdx++;
    }
    rows.push(row);
    r++;
  }
  return rows;
}
