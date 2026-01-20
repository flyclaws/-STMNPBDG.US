import os
import re

def check_main_js(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        has_main_js = 'main.js' in content
        has_data_user_button = 'data-user-button' in content
        has_user_dropdown = 'id="userDropdown"' in content

        return {
            'file': os.path.basename(file_path),
            'has_main_js': has_main_js,
            'has_data_user_button': has_data_user_button,
            'has_user_dropdown': has_user_dropdown,
            'complete': has_main_js and has_data_user_button and has_user_dropdown
        }
    except Exception as e:
        return {'file': os.path.basename(file_path), 'error': str(e)}

# Get all HTML files
html_files = []
for root, dirs, files in os.walk('.'):
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))

print('=== MAIN.JS INTEGRATION CHECK ===')
print(f'Total HTML files found: {len(html_files)}')
print()

results = []
for file_path in html_files:
    result = check_main_js(file_path)
    results.append(result)

complete_count = sum(1 for r in results if r.get('complete', False))
print(f'Complete integrations: {complete_count}/{len(results)}')
print()

print('DETAILED RESULTS:')
print('-' * 80)
for result in sorted(results, key=lambda x: x['file']):
    status = 'OK' if result.get('complete', False) else 'FAIL'
    print(f'{status} {result["file"]:<25} | MainJS: {result.get("has_main_js", False)} | Button: {result.get("has_data_user_button", False)} | Dropdown: {result.get("has_user_dropdown", False)}')
    if 'error' in result:
        print(f'   Error: {result["error"]}')

print()
print('=== SUMMARY ===')
if complete_count == len(results):
    print('All pages have complete main.js integration!')
else:
    print(f'{len(results) - complete_count} pages need attention.')