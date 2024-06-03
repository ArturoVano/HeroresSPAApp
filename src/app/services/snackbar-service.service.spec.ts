import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
  let service: SnackbarService;
  let snackBar: MatSnackBar;
  let snackBarSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatSnackBarModule],
      providers: [SnackbarService]
    });
    service = TestBed.inject(SnackbarService);
    snackBar = TestBed.inject(MatSnackBar);
    snackBarSpy = spyOn(snackBar, 'open');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should open a snackbar with a message and default duration', () => {
    const message = 'Test message';

    service.showMessage(message);

    expect(snackBarSpy).toHaveBeenCalledWith(message, 'done', { duration: service.SNACKBAR_DURATION });
  });

  it('should open a snackbar with a message and no duration', () => {
    const message = 'Test message without duration';

    service.showMessage(message, false);

    expect(snackBarSpy).toHaveBeenCalledWith(message, 'done');
  });
});
