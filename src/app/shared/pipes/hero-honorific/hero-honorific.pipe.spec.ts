import { HeroHonorificPipe } from './hero-honorific.pipe';

describe('HeroHonorificPipe', () => {
  it('create an instance', () => {
    const pipe = new HeroHonorificPipe();
    expect(pipe).toBeTruthy();
  });
});
