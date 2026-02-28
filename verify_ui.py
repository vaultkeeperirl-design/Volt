from playwright.sync_api import sync_playwright

def test_volt_ui():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the local Expo web server
        page.goto("http://localhost:8081", timeout=60000)

        # Wait for app to render
        page.wait_for_selector('text=Text Channels', timeout=10000)

        # Take a screenshot of the home channel list
        page.screenshot(path="channel-list-screenshot.png")

        # Navigate to chat
        page.get_by_text("general", exact=True).click()

        # Wait for chat to render (we look for the input placeholder)
        page.wait_for_selector('input[placeholder="Message #general"]', timeout=10000)

        # Take a screenshot of the chat UI
        page.screenshot(path="chat-screenshot.png")

        # Type into the input to see the enabled state
        page.fill('input[placeholder="Message #general"]', 'Hello world')

        # Take another screenshot of the input typed
        page.screenshot(path="chat-input-screenshot.png")

        browser.close()

if __name__ == "__main__":
    test_volt_ui()
