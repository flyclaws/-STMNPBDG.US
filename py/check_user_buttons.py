import os
import re

def check_user_button(file_path):
    filename = os.path.basename(file_path)
    
    # Skip pages that shouldn't have user buttons (login pages, test pages)
    skip_pages = ['login.html', 'create_account.html', 'guest_checkout.html', 'test_login.html']
    if filename in skip_pages:
        return {
            'file': filename,
            'has_data_user_button': True,  # Skip check
            'has_user_dropdown': True,     # Skip check
            'has_event_listener': True,    # Skip check
            'complete': True,              # Mark as complete
            'skipped': True
        }
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check for user button structure
        has_data_user_button = 'data-user-button' in content
        has_user_dropdown = 'id="userDropdown"' in content
        has_event_listener = 'Event listener untuk user button' in content
        
        return {
            'file': filename,
            'has_data_user_button': has_data_user_button,
            'has_user_dropdown': has_user_dropdown,
            'has_event_listener': has_event_listener,
            'complete': has_data_user_button and has_user_dropdown and has_event_listener
        }
    except Exception as e:
        return {'file': filename, 'error': str(e)}
# Get all HTML files
html_files = []
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

print('=== USER BUTTON IMPLEMENTATION CHECK ===')
print(f'Total HTML files found: {len(html_files)}')
print()

results = []
for file_path in html_files:
    result = check_user_button(file_path)
    results.append(result)

complete_count = sum(1 for r in results if r.get('complete', False))
print(f'Complete implementations: {complete_count}/{len(results)}')
print()

print('DETAILED RESULTS:')
print('-' * 80)
for result in sorted(results, key=lambda x: x['file']):
    if result.get('skipped', False):
        print(f'SKIP {result["file"]:<25} | (Login/Auth page - no user button needed)')
    else:
        status = 'OK' if result.get('complete', False) else 'FAIL'
        print(f'{status} {result["file"]:<25} | Button: {result.get("has_data_user_button", False)} | Dropdown: {result.get("has_user_dropdown", False)} | Listener: {result.get("has_event_listener", False)}')
    if 'error' in result:
        print(f'   Error: {result["error"]}')

print()
print('=== SUMMARY ===')
checked_results = [r for r in results if not r.get('skipped', False)]
complete_count = sum(1 for r in checked_results if r.get('complete', False))
skipped_count = sum(1 for r in results if r.get('skipped', False))

if complete_count == len(checked_results):
    print(f'🎉 All {len(checked_results)} checked pages have complete user button implementations!')
    if skipped_count > 0:
        print(f'   ({skipped_count} auth pages skipped as expected)')
else:
    print(f'{len(checked_results) - complete_count} out of {len(checked_results)} checked pages need attention.')
    if skipped_count > 0:
        print(f'   ({skipped_count} auth pages skipped as expected)')