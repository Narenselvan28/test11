export const experiments = [
  {
    no: "01",
    title: "Generation of Standard Continuous and Discrete Time Sequences and Carrying Out of Arithmetic Operations and Plot the Results",
    searchTitle: "generation of standard continuous and discrete time sequences and carrying out of arithmetic operations and plot the results",
    code: `clear all;
close all;

% 1. Unit Step Sequence
N = 7;
n = 0:N-1;
y = ones(1,N);
figure;
subplot(6,2,1); % Discrete
stem(n, y, 'filled');
xlabel('n');
ylabel('Amplitude');
title('Discrete Unit Step');

subplot(6,2,2); % Continuous
n_c = 0:0.01:N-1;
y_c = ones(size(n_c));
plot(n_c, y_c);
xlabel('t'); ylabel('Amplitude');
title('Continuous Unit Step');

% 2. Ramp Sequence
N1 = 7;
n1 = 0:N1-1;
y1 = n1;
subplot(6,2,3); % Discrete
stem(n1, y1, 'filled');
xlabel('n');
ylabel('Amplitude');
title('Discrete Ramp');

subplot(6,2,4); % Continuous
n1_c = 0:0.01:N1-1;
y1_c = n1_c;
plot(n1_c, y1_c);
xlabel('t');
ylabel('Amplitude');
title('Continuous Ramp');

% 3. Sinusoidal Sequence
N2 = 6;
n2 = 0:0.1:N2-1;
y2 = sin(2*pi*n2);
subplot(6,2,5); % Discrete
stem(n2, y2, 'filled');
xlabel('n');
ylabel('Amplitude');
title('Discrete Sinusoid');

subplot(6,2,6); % Continuous
plot(n2, y2);
xlabel('t');
ylabel('Amplitude');
title('Continuous Sinusoid');

% 4. Cosine Sequence
N3 = 4;
n3 = 0:0.1:N3-1;
y3 = cos(2*pi*n3);
subplot(6,2,7); % Discrete
stem(n3, y3, 'filled');
xlabel('n');
ylabel('Amplitude');
title('Discrete Cosine');

subplot(6,2,8); % Continuous
plot(n3, y3);
xlabel('t');
ylabel('Amplitude');
title('Continuous Cosine');

% 5. Exponential Sequence
N4 = 5;
n4 = 0:0.1:N4-1;
a = 0.5; % Modify as needed
y4 = exp(a * n4);
subplot(6,2,9); % Discrete
stem(n4, y4, 'filled');
xlabel('n');
ylabel('Amplitude');
title('Discrete Exponential');

subplot(6,2,10); % Continuous
plot(n4, y4);
xlabel('t');
ylabel('Amplitude');
title('Continuous Exponential');

% 6. Unit Impulse
n5 = -3:1:3;
y5 = [zeros(1,3), 1, zeros(1,3)];
subplot(6,2,11); % Discrete
stem(n5, y5, 'filled');
xlabel('n');
ylabel('Amplitude');
title('Discrete Impulse');

subplot(6,2,12); % Continuous
n5_c = -3:0.01:3;
y5_c = double(abs(n5_c) < 0.01);
plot(n5_c, y5_c);
xlabel('t'); ylabel('Amplitude');
title('Continuous Impulse');`,
  },
  {
    no: "02A",
    title: "Compute the Convolution Between Sequences",
    searchTitle: "compute the convolution between sequences",
    code: `clc; clear all; close all;

x1 = input('Enter the first sequence x1(n) = ');
x2 = input('Enter the second sequence x2(n) = ');

L = length(x1);
M = length(x2);
N = L + M - 1;

yn = conv(x1,x2);

disp('The values of y(n) are= ');
disp(yn);

n1 = 0:L-1;
subplot(311);
stem(n1,x1);
grid on;
xlabel('n1--->');
ylabel('amplitude--->');
title('First sequence');

n2 = 0:M-1;
subplot(312);
stem(n2,x2);
grid on;
xlabel('n2--->');
ylabel('amplitude--->');
title('Second sequence');

n3 = 0:N-1;
subplot(313);
stem(n3,yn);
grid on;
xlabel('n3--->');
ylabel('amplitude--->');
title('Convolved output');`,
  },
  {
    no: "02B",
    title: "Compute the Correlation Between Sequences",
    searchTitle: "compute the correlation between sequences",
    code: `clc; close all; clear all;

% Two input sequences
x = input('enter input sequence');

subplot(1,2,1);
stem(x);
xlabel('n');
ylabel('x(n)');
title('input sequence');

% Auto correlation of input sequence
z = xcorr(x,x);
disp('The values of z are = ');
disp(z);

subplot(1,2,2);
stem(z);
xlabel('n');
ylabel('z(n)');
title('auto correlation of input sequence');`,
  },
  {
    no: "03",
    title: "Verification of Sampling Theorem",
    searchTitle: "verification of sampling theorem",
    code: `clc;
clear;
close all;

%% Original Signal Parameters
f = 10; % Frequency of the analog signal (Hz)
t = 0:0.001:0.5; % High-resolution time vector
x = sin(2*pi*f*t); % Original continuous-time signal

%% Case 1: Sampling above Nyquist Rate (fs > 2f)
fs1 = 50;
ts1 = 0:1/fs1:0.5;
xs1 = sin(2*pi*f*ts1);

%% Case 2: Sampling at Nyquist Rate (fs = 2f)
fs2 = 20;
ts2 = 0:1/fs2:0.5;
xs2 = sin(2*pi*f*ts2);

%% Case 3: Sampling below Nyquist Rate (fs < 2f) - Aliasing
fs3 = 15;
ts3 = 0:1/fs3:0.5;
xs3 = sin(2*pi*f*ts3);

%% Plotting
figure;

subplot(3,1,1);
plot(t,x,'k'); hold on;
stem(ts1, xs1, 'r', 'filled');
title('Sampling at fs = 50 Hz > 2f (No Aliasing)');
xlabel('Time (s)'); ylabel('Amplitude');
legend('Original Signal', 'Sampled Signal'); grid on;

subplot(3,1,2);
plot(t,x,'k');
hold on;
stem(ts2, xs2, 'b', 'filled');
title('Sampling at fs = 20 Hz = 2f (Critical Sampling)');
xlabel('Time (s)'); ylabel('Amplitude');
legend('Original Signal', 'Sampled Signal');
grid on;

subplot(3,1,3);
plot(t,x,'k'); hold on;
stem(ts3, xs3, 'm', 'filled');
title('Sampling at fs = 15 Hz < 2f (Aliasing)');
xlabel('Time (s)');
ylabel('Amplitude');
legend('Original Signal', 'Sampled Signal');
grid on;`,
  },
  {
    no: "04A",
    title: "Design of FIR Filters — LP FIR Filter",
    searchTitle: "design of fir filters — lp fir filter",
    code: `clc;
clear all;
close all;

n = 20;
fp = 200;
fq = 300;
fs = 1000;

fn = 2*fp/fs;
window = blackman(n+1);
b = fir1(n,fn,window);
[H,W] = freqz(b,1,128);

subplot(2,1,1);
plot(W/pi,abs(H));
title('magnitude response of lpf');
ylabel('gain in db');
xlabel('normalized frequency');

subplot(2,1,2);
plot(W/pi,angle(H));
title('phase response of lpf');
ylabel('angle');
xlabel('normalized frequency');`,
  },
  {
    no: "04B",
    title: "Design of FIR Filters — HP FIR Filter",
    searchTitle: "design of fir filters — hp fir filter",
    code: `clc;
clear all;
close all;

n = 20;
fp = 300;
fq = 200;
fs = 1000;

fn = 2*fp/fs;
window = blackman(n+1);
b = fir1(n,fn,'high',window);
[H,W] = freqz(b,1,128);

subplot(2,1,1);
plot(W/pi,abs(H));
title('mag res of lpf');
ylabel('gain in db');
xlabel('normalized frequency');

subplot(2,1,2);
plot(W/pi,angle(H));
title('phase response of lpf');
ylabel('angle');
xlabel('normalized frequency');`,
  },
  {
    no: "05",
    title: "Design of IIR Filters for the Given Specification and Plot the Frequency Response of the Designed Filter",
    searchTitle: "design of iir filters for the given specification and plot the frequency response of the designed filter",
    code: `clc;
clear all;
close all;

disp('enter the IIR filter design specifications');

rp = input('enter the passband ripple:');
rs = input('enter the stopband ripple:');
wp = input('enter the passband freq:');
ws = input('enter the stopband freq:');
fs = input('enter the sampling freq:');

w1 = 2*wp/fs;
w2 = 2*ws/fs;

[n,wn] = buttord(w1,w2,rp,rs,'s');

disp('Frequency response of IIR LPF is:');

[b,a] = butter(n,wn,'low','s');

w = 0:.01:pi;
[h,om] = freqs(b,a,w);

m = 20*log10(abs(h));
an = angle(h);

figure;
subplot(2,1,1);
plot(om/pi,m);
title('magnitude response of IIR filter is:');
xlabel('(a) Normalized freq. -->');
ylabel('Gain in dB-->');

subplot(2,1,2);
plot(om/pi,an);
title('phase response of IIR filter is:');
xlabel('(b) Normalized freq. -->');
ylabel('Phase in radians-->');`,
  },
  {
    no: "06",
    title: "To Plot the Wave Forms for QPSK Signal Subjected to Rayleigh AWGN",
    searchTitle: "to plot the wave forms for qpsk signal subjected to rayleigh awgn",
    code: `clc;
clear;
close all;

%% Parameters
N = 1000; % Number of bits
SNR_dB = 20; % SNR in dB
M = 4; % QPSK: 4 symbols
k = log2(M); % Bits per symbol
N_sym = N/k; % Number of QPSK symbols

%% Generate random bits
data_bits = randi([0 1], N, 1);

%% QPSK Modulation
data_symbols = reshape(data_bits, k, []).';

% Mapping bits to QPSK symbols using Gray coding
symbol_map = [1+1j, -1+1j, -1-1j, 1-1j] / sqrt(2);

symbol_indices = bi2de(data_symbols, 'left-msb') + 1;
tx_symbols = symbol_map(symbol_indices).';

%% Rayleigh Channel
h = (randn(N_sym,1) + 1j*randn(N_sym,1)) / sqrt(2);
rx_faded = h .* tx_symbols;

%% Add AWGN
SNR_linear = 10^(SNR_dB/10);
noise_power = 1 / SNR_linear;
noise = sqrt(noise_power/2) * ...
    (randn(N_sym,1) + 1j*randn(N_sym,1));

rx_signal = rx_faded + noise;

%% Receiver: Equalization
rx_eq = rx_signal ./ h; % Assuming perfect channel knowledge

%% Plotting
t = 1:N_sym;

figure;

subplot(3,1,1);
plot(t, real(tx_symbols), 'b', t, imag(tx_symbols), 'r');
title('Transmitted QPSK Symbols (In-Phase and Quadrature)');
xlabel('Symbol Index');
ylabel('Amplitude');
legend('In-Phase','Quadrature');
grid on;

subplot(3,1,2);
plot(t, real(rx_signal), 'b', t, imag(rx_signal), 'r');
title('Received Signal after Rayleigh Channel and AWGN');
xlabel('Symbol Index');
ylabel('Amplitude');
legend('In-Phase','Quadrature');
grid on;

subplot(3,1,3);
plot(t, real(rx_eq), 'b', t, imag(rx_eq), 'r');
title('Equalized Signal (After Rayleigh Channel Compensation)');
xlabel('Symbol Index');
ylabel('Amplitude');
legend('In-Phase','Quadrature');
grid on;`,
  },
];
