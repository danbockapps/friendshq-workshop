import { FullNamePipe } from './full-name.pipe';
import { Gender, Friend } from '../../shared';

describe('FullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('prints the full name', () => {
    const pipe = new FullNamePipe();
    let friend: Friend = {
      id: 1,
      firstName: 'Wade',
      lastName: 'Boggs',
      fav: false,
      gender: Gender.F,
    };

    expect(pipe.transform(friend)).toBe('Wade Boggs');
  })
});
