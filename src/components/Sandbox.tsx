import React, { useEffect, useState } from "react";
import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  RoundedButton as SandpackRoundedButton,
} from "@codesandbox/sandpack-react";

export const Sandbox: React.FC<{
  sandboxId: string;
  title: string;
  description: string;
  showRefreshButton: boolean;
}> = ({ sandboxId, title, description, showRefreshButton = false }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [files, setFiles] = useState();
  const [env, setEnv] = useState();

  useEffect(() => {
    fetch(
      `https://codesandbox.io/api/v1/sandboxes/csb-id-${sandboxId}/sandpack`
    )
      .then((res) => res.json())
      .then((data) => {
        setFiles(
          Object.entries(data.files)
            .filter(([name]) => !name.startsWith("/."))
            .reduce((acc, curr) => {
              acc[curr[0]] = curr[1];
              return acc;
            }, {})
        );
        setEnv(
          data.environment === "create-react-app" ? "react" : data.environment
        );
      });
  }, []);

  if (!files || !env) return null;

  return (
    <SandpackProvider
      files={files}
      customSetup={{ environment: env }}
      options={{
        initMode: "immediate",
      }}
    >
      <SandpackLayout>
        <SandpackPreview
          showRefreshButton={showRefreshButton}
          showOpenInCodeSandbox={false}
          actionsChildren={
            <>
              <SandpackRoundedButton
                onClick={() => {
                  window.open(
                    `https://codesandbox.io/p/sandbox/${sandboxId}`,
                    "_blank"
                  );
                }}
                className="sp-icon-standalone"
              >
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 16 16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <title>Open on CodeSandbox</title>
                  <path
                    d="M6.66665 3.33337H4.33331C3.78103 3.33337 3.33331 3.78109 3.33331 4.33337V11.6667C3.33331 12.219 3.78103 12.6667 4.33331 12.6667H11.6666C12.2189 12.6667 12.6666 12.219 12.6666 11.6667V9.33337"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M10 3.33337H12.5667C12.6219 3.33337 12.6667 3.37815 12.6667 3.43337V6.00004"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M7.33331 8.66668L12.5333 3.46667"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </SandpackRoundedButton>
            </>
          }
        />
      </SandpackLayout>

      <div className="sandbox-details">
        <p className="sandbox-details__title text-base color-0">{title}</p>

        <p className="color-1 text-base">{description}</p>

        <button
          onClick={() => setShowDetails((prev) => !prev)}
          className="sandbox-details__cta text-highlight text-small"
          data-open={showDetails}
        >
          <span>{showDetails ? "Hide code" : "Show code"}</span>

          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {showDetails && (
        <SandpackLayout>
          <SandpackFileExplorer />
          <SandpackCodeEditor closableTabs showTabs />
        </SandpackLayout>
      )}
    </SandpackProvider>
  );
};
