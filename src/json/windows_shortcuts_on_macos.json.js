// JavaScript should be written in ECMAScript 5.1.

const excludeBundleIdentifiersWindows = [
  '^com\\.microsoft\\.rdc$',
  '^com\\.microsoft\\.rdc\\.mac$',
  '^com\\.microsoft\\.rdc\\.macos$',
  '^com\\.microsoft\\.rdc\\.osx\\.beta$',
  '^net\\.sf\\.cord$',
  '^com\\.thinomenon\\.RemoteDesktopConnection$',
  '^com\\.itap-mobile\\.qmote$',
  '^com\\.nulana\\.remotixmac$',
  '^com\\.p5sys\\.jump\\.mac\\.viewer$',
  '^com\\.p5sys\\.jump\\.mac\\.viewer\\.web$',
  '^com\\.teamviewer\\.TeamViewer$',
  '^com\\.vmware\\.horizon$',
  '^com\\.2X\\.Client\\.Mac$',
  '^com\\.vmware\\.fusion$',
  '^com\\.vmware\\.horizon$',
  '^com\\.vmware\\.view$',
  '^com\\.parallels\\.desktop$',
  '^com\\.parallels\\.vm$',
  '^com\\.parallels\\.desktop\\.console$',
  '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
  '^com\\.citrix\\.XenAppViewer$',
  '^com\\.vmware\\.proxyApp\\.',
  '^com\\.parallels\\.winapp\\.',
  '^tv\\.parsec\\.www$',
]

const excludeBundleIdentifiersFull = excludeBundleIdentifiersWindows.concat([
  '^org\\.macports\\.X11$',
  '^com\\.apple\\.Terminal$',
  '^com\\.googlecode\\.iterm2$',
  '^co\\.zeit\\.hyperterm$',
  '^co\\.zeit\\.hyper$',
  '^io\\.alacritty$',
  '^net\\.kovidgoyal\\.kitty$',
])

console.log(
  JSON.stringify(
    {
      title: 'Windows shortcuts on macOS',
      rules: [
        {
          description:
            'Ctrl+C, Ctrl+V, Ctrl+X => Cmd+C (Copy), Cmd+V (Paste), Cmd+X (Cut)',
          manipulators: [
            {
              type: 'basic',
              from: {
                key_code: 'c',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'c',
                  modifiers: ['left_command'],
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_unless',
                  bundle_identifiers: excludeBundleIdentifiersFull,
                },
              ],
            },
            {
              type: 'basic',
              from: {
                key_code: 'v',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'v',
                  modifiers: ['left_command'],
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_unless',
                  bundle_identifiers: excludeBundleIdentifiersFull,
                },
              ],
            },
            {
              type: 'basic',
              from: {
                key_code: 'x',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'x',
                  modifiers: ['left_command'],
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_unless',
                  bundle_identifiers: excludeBundleIdentifiersFull,
                },
              ],
            },
          ],
        },
        {
          description: 'Ctrl+Z => Cmd+Z (Undo)',
          manipulators: [
            // The character key code of Z is {"key_code":"y"} for German input source.
            {
              conditions: [
                {
                  input_sources: [
                    {
                      language: '^de$',
                    },
                  ],
                  type: 'input_source_if',
                },
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'y',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'y',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
            // For other input sources.
            {
              conditions: [
                {
                  input_sources: [
                    {
                      language: '^de$',
                    },
                  ],
                  type: 'input_source_unless',
                },
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'z',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'z',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+Y => Cmd+Shift+Z (Redo)',
          manipulators: [
            // The character key code of Y is {"key_code":"z"} for German input source.
            // The character key code of Z is {"key_code":"y"} for German input source.
            {
              conditions: [
                {
                  input_sources: [
                    {
                      language: '^de$',
                    },
                  ],
                  type: 'input_source_if',
                },
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'z',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'y',
                  modifiers: ['left_command', 'left_shift'],
                },
              ],
              type: 'basic',
            },
            // For other input sources.
            {
              conditions: [
                {
                  input_sources: [
                    {
                      language: '^de$',
                    },
                  ],
                  type: 'input_source_unless',
                },
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'y',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'z',
                  modifiers: ['left_command', 'left_shift'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+A => Cmd+A (Select all)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'a',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'a',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+S => Cmd+S (Save)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 's',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 's',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+N => Cmd+N (New)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'n',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'n',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+F => Cmd+F (Find)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'f',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'f',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'g',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'g',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+W => Cmd+W (Close)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'w',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'w',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Alt+F4 => Cmd+Q (Exit application)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersWindows,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'f4',
                modifiers: {
                  mandatory: ['option'],
                },
              },
              to: [
                {
                  key_code: 'q',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description:
            'Home => Cmd+Left arrow (Move cursor to beginning of line)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'home',
              },
              to: [
                {
                  key_code: 'left_arrow',
                  modifiers: ['command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description:
            'Shift+Home => Cmd+Shift+Left arrow (Move cursor to beginning of line with selection)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'home',
                modifiers: {
                  mandatory: ['shift'],
                },
              },
              to: [
                {
                  key_code: 'left_arrow',
                  modifiers: ['command', 'shift'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description:
            'Ctrl+Home, Ctrl+Shift+Home => Cmd+Up arrow, Cmd+Shift+Up arrow (Move cursor to beginning of file with and without selection)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'home',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['shift'],
                },
              },
              to: [
                {
                  key_code: 'up_arrow',
                  modifiers: ['command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'End => Cmd+Right arrow (Move cursor to end of line)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'end',
              },
              to: [
                {
                  key_code: 'right_arrow',
                  modifiers: ['command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description:
            'Shift+End => Cmd+Shift+Right arrow (Move cursor to end of line with selection)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'end',
                modifiers: {
                  mandatory: ['shift'],
                },
              },
              to: [
                {
                  key_code: 'right_arrow',
                  modifiers: ['command', 'shift'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description:
            'Ctrl+End, Ctrl+Shift+End => Cmd+down arrow, Cmd+Shift+down arrow (Move cursor to end of file with and without selection)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'end',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['shift'],
                },
              },
              to: [
                {
                  key_code: 'down_arrow',
                  modifiers: ['command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+T => Cmd+T (New tab)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 't',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 't',
                  modifiers: ['command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+B => Cmd+B (Bold)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'b',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'b',
                  modifiers: ['command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+I => Cmd+I (Italic)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.macports\\.X11$',
                    '^com\\.apple\\.Terminal$',
                    '^com\\.googlecode\\.iterm2$',
                    '^co\\.zeit\\.hyper$',
                    '^org\\.virtualbox\\.app\\.VirtualBoxVM$',
                    '^com\\.microsoft\\.rdc\\.macos$',
                    '^tv\\.parsec\\.www$',
                  ],
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'i',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'i',
                  modifiers: ['command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+L => Cmd+L (Open url location) (Only in browsers)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.mozilla\\.firefox$',
                    '^org\\.mozilla\\.firefoxdeveloperedition$',
                    '^org\\.mozilla\\.nightly$',
                    '^com\\.microsoft\\.Edge',
                    '^com\\.google\\.Chrome$',
                    '^com\\.brave\\.Browser$',
                    '^com\\.apple\\.Safari$',
                  ],
                  type: 'frontmost_application_if',
                },
              ],
              from: {
                key_code: 'l',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'l',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+R => Cmd+R (Reload) (Only in browsers)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: [
                    '^org\\.mozilla\\.firefox$',
                    '^org\\.mozilla\\.firefoxdeveloperedition$',
                    '^org\\.mozilla\\.nightly$',
                    '^com\\.microsoft\\.Edge',
                    '^com\\.google\\.Chrome$',
                    '^com\\.brave\\.Browser$',
                    '^com\\.apple\\.Safari$',
                  ],
                  type: 'frontmost_application_if',
                },
              ],
              from: {
                key_code: 'r',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'r',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'F5 => Cmd+r (Reload)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'f5',
                modifiers: {
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'r',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+Tab => Cmd+Tab (Switch application)',
          manipulators: [
            {
              from: {
                key_code: 'tab',
                modifiers: {
                  mandatory: ['option'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'tab',
                  modifiers: ['left_command'],
                },
              ],
              type: 'basic',
            },
            {
              from: {
                key_code: 'tab',
                modifiers: {
                  mandatory: ['option', 'left_shift'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'tab',
                  modifiers: ['left_command', 'left_shift'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description:
            'Cmd+Tab => Cmd+Alt+0 (Reassigned command for opening Mission control)',
          manipulators: [
            {
              from: {
                key_code: 'tab',
                modifiers: {
                  mandatory: ['left_command'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: '0',
                  modifiers: ['left_command', 'left_option'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description:
            'Ctrl+(Shift)+Right/left arrow => Alt+(Shift)+Right/left arrow (Move cursor one word with selection and without selection)',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'left_arrow',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['shift'],
                },
              },
              to: [
                {
                  key_code: 'left_arrow',
                  modifiers: ['left_option'],
                },
              ],
              type: 'basic',
            },
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersFull,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'right_arrow',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['shift'],
                },
              },
              to: [
                {
                  key_code: 'right_arrow',
                  modifiers: ['left_option'],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description:
            'Ctrl+Up/down arrow => Up/down arrow (Move cursor up/down)',
          manipulators: [
            {
              type: 'basic',
              from: {
                key_code: 'up_arrow',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['shift'],
                },
              },
              to: [
                {
                  key_code: 'up_arrow',
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_unless',
                  bundle_identifiers: excludeBundleIdentifiersFull,
                },
              ],
            },
            {
              type: 'basic',
              from: {
                key_code: 'down_arrow',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['shift'],
                },
              },
              to: [
                {
                  key_code: 'down_arrow',
                  modifiers: [],
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_unless',
                  bundle_identifiers: excludeBundleIdentifiersFull,
                },
              ],
            },
          ],
        },
        {
          description: 'Cmd+L => Logout (CGSession -suspend)',
          manipulators: [
            {
              from: {
                key_code: 'l',
                modifiers: {
                  mandatory: ['command'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  shell_command:
                    '/System/Library/CoreServices/Menu\\ Extras/User.menu/Contents/Resources/CGSession -suspend',
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+Esc => Open Launchpad',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersWindows,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'escape',
                modifiers: {
                  mandatory: ['control'],
                },
              },
              to: [
                {
                  key_code: 'launchpad',
                  modifiers: [],
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Ctrl+Shift+Esc => Open Activity Monitor',
          manipulators: [
            {
              conditions: [
                {
                  bundle_identifiers: excludeBundleIdentifiersWindows,
                  type: 'frontmost_application_unless',
                },
              ],
              from: {
                key_code: 'escape',
                modifiers: {
                  mandatory: ['control', 'shift'],
                },
              },
              to: [
                {
                  shell_command: "open -a 'Activity Monitor.app'",
                },
              ],
              type: 'basic',
            },
          ],
        },
        {
          description: 'Return => Cmd+o (Open) (Only in Finder)',
          manipulators: [
            {
              type: 'basic',
              from: {
                key_code: 'return_or_enter',
                modifiers: {
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'o',
                  modifiers: ['right_command'],
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_if',
                  bundle_identifiers: ['^com.apple.finder'],
                },
              ],
            },
          ],
        },
        {
          description: 'F2 => Return (Rename) (Only in Finder)',
          manipulators: [
            {
              type: 'basic',
              from: {
                key_code: 'f2',
              },
              to: [
                {
                  key_code: 'return_or_enter',
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_if',
                  bundle_identifiers: ['^com.apple.finder'],
                },
              ],
            },
          ],
        },
        {
          description: 'Delete => Cmd+backspace (Delete) (Only in Finder)',
          manipulators: [
            {
              type: 'basic',
              from: {
                key_code: 'delete_forward',
                modifiers: {
                  optional: ['any'],
                },
              },
              to: [
                {
                  key_code: 'delete_or_backspace',
                  modifiers: ['left_command'],
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_if',
                  bundle_identifiers: ['^com.apple.finder'],
                },
              ],
            },
          ],
        },
        {
          description: 'Backspace => Cmd+up (Go back) (Only in Finder)',
          manipulators: [
            {
              type: 'basic',
              from: {
                key_code: 'delete_or_backspace',
              },
              to: [
                {
                  key_code: 'up_arrow',
                  modifiers: ['left_command'],
                },
              ],
              conditions: [
                {
                  type: 'frontmost_application_if',
                  bundle_identifiers: ['^com.apple.finder'],
                },
              ],
            },
          ],
        },
        {
          description:
            'Ctrl+Left Click => Cmd+Left Click (select multiple items)',
          manipulators: [
            {
              from: {
                pointing_button: 'button1',
                modifiers: {
                  mandatory: ['control'],
                  optional: ['any'],
                },
              },
              to: [
                {
                  pointing_button: 'button1',
                  modifiers: ['command'],
                },
              ],
              type: 'basic',
            },
          ],
        },
      ],
    },
    null,
    '  '
  )
)
